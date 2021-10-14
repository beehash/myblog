// import {useState, useEffect} from 'react';

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;
let startTime = 0;
class DragUtil {
  el: HTMLElement = null as unknown as HTMLElement;
  startX: number = 0;
  startY: number = 0;
  offsetLeft: number = 0;
  offsetTop: number = 0;
  mousedownFired: boolean = false;
  clientX: number = 0;
  clientY: number = 0;
  init(el: HTMLElement) {
    this.el = el;
    this.clientX = innerWidth - el.clientWidth;
    this.clientY = innerHeight - el.clientHeight;
    this.bind('mousedown', el);
  }
  handleEvent(event: Event) {
    const that = this;
    switch(event.type) {
      case 'mousedown':
        that.dragStart(event);
        break;
      case 'mousemove':
        that.dragMove(event);
        break;
      case 'mouseup':
        that.dragEnd(event);
        break;
      default:
        that.dragStart(event);
    }
  }
  bind(eventName: string, el: HTMLElement, callback?: EventListenerOrEventListenerObject) {
    const that = this;
    el.addEventListener(eventName, callback || that);
  }
  unbind(eventName: string, el: HTMLElement, callback?: EventListenerOrEventListenerObject) {
    const that = this;
    el.removeEventListener(eventName, callback || that);
  }
  dragStart(e: any) {
    e.preventDefault();
    e.stopPropagation();
    startTime = window.performance.now();
    this.offsetLeft = this.el.offsetLeft;
    this.offsetTop = this.el.offsetTop;
    this.startX = e.x;
    this.startY = e.y;
    this.bind('mousemove', this.el);
    this.bind('mouseup', this.el);
  }
  dragMove(e: any) {
    e.preventDefault();
    e.stopPropagation();

    let offsetLeft = e.x - (this.startX - this.offsetLeft);
    let offsetTop = e.y - (this.startY - this.offsetTop);
    offsetLeft = offsetLeft <= 0 ? 0 : offsetLeft >= this.clientX ? this.clientX : offsetLeft;
    offsetTop = offsetTop <= 0 ? 0 : offsetTop >= this.clientY ? this.clientY : offsetTop;

    this.el.style.left = offsetLeft + 'px';
    this.el.style.top = offsetTop + 'px';
  }
  dragEnd(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const during = window.performance.now() - startTime;

    if(during > 300) {
      this.mousedownFired = true;
    }

    let offsetLeft = e.x - (this.startX - this.offsetLeft);
    let offsetTop = e.y - (this.startY - this.offsetTop);
    offsetLeft = offsetLeft <= 0 ? 0 : offsetLeft >= this.clientX ? this.clientX : offsetLeft;
    offsetTop = offsetTop <= 0 ? 0 : offsetTop >= this.clientY ? this.clientY : offsetTop;

    this.el.style.left = offsetLeft + 'px';
    this.el.style.top = offsetTop + 'px';

    this.unbind('mousemove', this.el);
    this.unbind('mouseup', this.el);
  }
  closeMousedownFire = () => {
    this.mousedownFired = false;
  }
  distroy = () => {
    this.unbind('mousedown', this.el);
    this.unbind('mousemove', this.el);
    this.unbind('mouseup', this.el);
    this.startX = 0;
    this.startY = 0;
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.mousedownFired = false;
    this.clientX = 0;
    this.clientY = 0;
  }
}

export default DragUtil;