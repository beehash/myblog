/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2023-05-16 16:00:36
 */
export default class fetchEventSource {
  fetchReader=null;
  fetchInstance=null;
  requestOptions={};
  retryTimer=0;
  retryInterval=1000;
  ctrl=null;
  LastEventId='last-event-id';
  constructor(url, {
    headers: inputHeaders,
    ...rest
  }) {
    this.headers = {
      accept: this.EventStreamContentType,
      ...inputHeaders
    };
    this.requestOptions = rest;
    this.url = url;
    this.create();
  }
  async create() {
    try {
      this.ctrl = new AbortController();
      this.fetchInstance = fetch(this.url, {
        headers: this.headers,
        ...this.requestOptions,
        signal: this.ctrl.signal
      });
      const response = await this.fetchInstance;
      await this.onopen && this.onopen(response);
      const reader = response.body && response.body.getReader();
      this.fetchReader = reader;
      await getBytes(reader, getLines(getMessages(this.onmessage, (retry) => {
          this.retryInterval = retry;
        },(id) => {
          if (id) {
            this.headers[this.LastEventId] = id;
          } else {
            delete this.headers[this.LastEventId];
          }
      })));
      onclose === null || onclose === void 0 ? void 0 : onclose();
      this.onclose && this.onclose();
      this.close();
    } catch (err) {
      if (!this.ctrl.signal.aborted) {
        try {
          window.clearTimeout(this.retryTimer);
          this.retryTimer = window.setTimeout(create, 1000);
        } catch (innerErr) {
          this.onerror && this.onerror(err);
          this.close();
        }
      }
    }
  }
  close() {
    window.clearTimeout(this.retryTimer);
    this.ctrl.abort();
  }
}
async function getBytes(reader, onChunk) {
  let result;
  while (!(result = await reader.read()).done) {
    onChunk(result.value);
  }
}

const ControlChars = {
  NewLine: 10,
  CarriageReturn: 13,
  Space: 32,
  Colon: 58,
}
function getLines(onLine) {
  let buffer;
  let position;
  let fieldLength;
  let discardTrailingNewline = false;

  return function onChunk(arr) {
    if (buffer === undefined) {
      buffer = arr;
      position = 0;
      fieldLength = -1;
    } else {
      buffer = concat(buffer, arr);
    }
    const bufLength = buffer.length;
    let lineStart = 0;
    while (position < bufLength) {
      if (discardTrailingNewline) {
        if (buffer[position] === ControlChars.NewLine) {
          lineStart = ++position;
        }

        discardTrailingNewline = false;
      }

      let lineEnd = -1;
      for (; position < bufLength && lineEnd === -1; ++position) {
        switch (buffer[position]) {
          case ControlChars.Colon:
            if (fieldLength === -1) {
              fieldLength = position - lineStart;
            }
            break;
          case ControlChars.CarriageReturn:
            discardTrailingNewline = true;
          case ControlChars.NewLine:
            lineEnd = position;
            break;
        }
      }
      if (lineEnd === -1) {
        break;
      }

      onLine(buffer.subarray(lineStart, lineEnd), fieldLength);
      lineStart = position;
      fieldLength = -1;
    }
    if (lineStart === bufLength) {
      buffer = undefined;
    } else if (lineStart !== 0) {
      buffer = buffer.subarray(lineStart);
      position -= lineStart;
    }
  };
}

function getMessages(onMessage, onRetry, onId) {
  let message = newMessage();
  const decoder = new TextDecoder();

  return function onLine(line, fieldLength) {
    if (line.length === 0) {
      onMessage === null || onMessage === void 0 ? void 0 : onMessage(message);
      message = newMessage();
    } else if (fieldLength > 0) {
      const field = decoder.decode(line.subarray(0, fieldLength));
      const valueOffset = fieldLength + (line[fieldLength + 1] === ControlChars.Space ? 2 : 1);
      const value = decoder.decode(line.subarray(valueOffset));
      switch (field) {
        case 'data':
          message.data = message.data ? message.data + '\n' + value : value;
          break;
        case 'event':
          message.event = value;
          break;
        case 'id':
          onId && onId(message.id = value);
          break;
        case 'retry':
          const retry = parseInt(value, 10);
          message.retry = retry;
          !isNaN(retry) && onRetry && onRetry(retry);
          break;
      }
    }
  };
}
function concat(a, b) {
  const res = new Uint8Array(a.length + b.length);
  res.set(a);
  res.set(b, a.length);
  return res;
}
function newMessage() {
  return {
    data: '',
    event: '',
    id: '',
    retry: undefined
  };
}
