import { singleton } from '@/utils/index';
import icons from '@/utils/icons';


export interface MessageOption {
  msg: string;
  status?: 'success' | 'info' | 'warning' | 'error';
  callback?: Function;
};

const defaultOptions: MessageOption = {
  msg: '这是一条信息',
  status: 'info',
};

@singleton
class Message {
  static instance: Message;
  static getInstance: () => Message;
  options: MessageOption = defaultOptions;
  root: HTMLElement | undefined = undefined;

  constructor(propOptions: MessageOption) {
    this.options = {
      ...defaultOptions,
      ...propOptions,
    };
    this.root = Message.createElement();
  }

  // 创建元素
  static createElement() {
    const el = document.createElement('div');
    el.id = 'message-root';
    el.className = 'message-box';
    el.style.display = 'none';
    let root = document.getElementById('message-root');
    if(!root){
      root = document.body.appendChild(el);
    }
    return root;
  }

  // 信息提示弹窗
  info(msg: string) {
    (this.root as HTMLElement).style.display = 'block';
    (this.root as HTMLElement).innerHTML=`<span class='msg-box msg-info'>${icons.info}<span>${msg}</span></span>`;
    setTimeout(() => {
      (this.root as HTMLElement).style.display = 'none';
    }, 1000);
  }

}

const MessageInstance = Message.getInstance();
export default MessageInstance;