export default class starRain {
  ctx!: CanvasRenderingContext2D;
  constructor () {
    this.ctx = this.createCanvas() as CanvasRenderingContext2D;
  }

  createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = document.body.offsetWidth;
    canvas.height = document.body.offsetHeight;
    document.body.append(canvas);
    const ctx = canvas.getContext('2d');
    return ctx;
  }

  draw() {
    
  }
}