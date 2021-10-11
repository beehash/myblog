class DragUtil {
  constructor(el: HTMLElement) {
    this.el = el;
    this.bind('mousedown', this.el, this.dragStart);
  }
  el: HTMLElement;
  startX: number = 0;
  startY: number = 0;
  offsetLeft: number = 0;
  offsetTop: number = 0;
  bind(eventName: string, el: HTMLElement, callback: Function) {
    const that = this;
    el.addEventListener(eventName, callback.bind(that) || that, false);
  }
  unbind(eventName: string, el: HTMLElement, callback: Function) {
    const that = this;
    el.removeEventListener(eventName, callback.bind(that) || that, false);
  }
  dragStart = (e: any) => {
    const that = this;
    e.preventDefault();
    e.stopPropagation();

    this.offsetLeft = this.el.offsetLeft;
    this.offsetTop = this.el.offsetTop;
    this.startX = e.x;
    this.startY = e.y;
    this.bind('mousemove', that.el, that.dragMove);
    this.bind('mouseup', that.el, that.dragEnd);
  }
  dragMove = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    this.el.style.left = e.x - (this.startX - this.offsetLeft) + 'px';
    this.el.style.top = e.y - (this.startY - this.offsetTop) + 'px';
  }
  dragEnd= (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const that = this;

    this.el.style.left = e.x - (this.startX - this.offsetLeft) + 'px';
    this.el.style.top = e.y - (this.startY - this.offsetTop) + 'px';

    this.unbind('mousemove', that.el, that.dragMove);
    this.unbind('mouseup', that.el, that.dragEnd);
  }
}
export default DragUtil;