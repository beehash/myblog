export function trigger(eventName: string) {

}
// window.HTMLElement.trigger = function trigger(eventName:string);
Object.defineProperty(window.Element.prototype, 'trigger', {
  value: function (eventName: string) {
    this.dispatchEvent(eventName);
  }
});
// type EventType = 'MouseEvents' | 'Events' | 'UIEvents' | 'MutationEvents' | 'HTMLEvents';
interface Obj {
  [key: string]: any;
}
export function createEvent(eventType: string, eventName: string) {
  const eventConstructors = {
    event: 'Event',
    mouseEvent: 'MouseEvent',
    focusEvent: 'FocusEvent',
    dragEvent: 'DragEvent',
    errorEvent: 'ErrotEvent',
    hashChangeEvent: 'HashChangeEvent',
    keyboardEvent: 'KeyboardEvent',
    inputEvent: 'InputEvent',
    pointerEvent: 'PointerEvent',
    svgEvent: 'SVGEvent',
    webglContextEvent: 'WebGLContextEvent',
    mediaStreamEvent: 'MediaStreamEvent',
    customEvent: 'CustomEvent',
    blobEvent: 'BlobEvent',
    clipboardEvent: 'ClipboardEvent',
  };

  new (eventConstructors as Obj)[eventType]();

}
function eventHandler(event: Event) {
  Object.defineProperty(event.target, 'trigger', {
    value: function (eventName: string) {
      this.dispatchEvent(eventName);
    }
  });
}