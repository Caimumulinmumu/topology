import { Point } from '../../../models/point';
import { Rect } from '../../../models/rect';

export function line(ctx: CanvasRenderingContext2D, from: Point, to: Point) {
  ctx.save();
  ctx.beginPath();
  const rect = new Rect(to.x - 12, to.y - 6, 12, 12);
  ctx.translate(to.x, to.y);
  ctx.rotate(Math.atan2(to.y - from.y, to.x - from.x));
  ctx.translate(-to.x, -to.y);
  ctx.moveTo(rect.x, rect.y);
  ctx.lineTo(rect.x + rect.width, (rect.y + (rect.height / 2 + 0.5)) << 0);
  ctx.lineTo(rect.x, rect.y + rect.height);
  ctx.stroke();
  ctx.restore();
}

export function lineUp(ctx: CanvasRenderingContext2D, from: Point, to: Point) {
  ctx.save();
  ctx.beginPath();
  const rect = new Rect(to.x - 12, to.y - 6, 12, 12);
  ctx.translate(to.x, to.y);
  ctx.rotate(Math.atan2(to.y - from.y, to.x - from.x));
  ctx.translate(-to.x, -to.y);
  if (to.x > from.x) {
    ctx.moveTo(rect.x, rect.y);
    ctx.lineTo(rect.x + rect.width, (rect.y + (rect.height / 2 + 0.5)) << 0);
  } else {
    ctx.moveTo(rect.x + rect.width, (rect.y + (rect.height / 2 + 0.5)) << 0);
    ctx.lineTo(rect.x, rect.y + rect.height);
  }

  ctx.stroke();
  ctx.restore();
}

export function lineDown(ctx: CanvasRenderingContext2D, from: Point, to: Point) {
  ctx.save();
  ctx.beginPath();
  const rect = new Rect(to.x - 12, to.y - 6, 12, 12);
  ctx.translate(to.x, to.y);
  ctx.rotate(Math.atan2(to.y - from.y, to.x - from.x));
  ctx.translate(-to.x, -to.y);
  if (to.x < from.x) {
    ctx.moveTo(rect.x, rect.y);
    ctx.lineTo(rect.x + rect.width, (rect.y + (rect.height / 2 + 0.5)) << 0);
  } else {
    ctx.moveTo(rect.x + rect.width, (rect.y + (rect.height / 2 + 0.5)) << 0);
    ctx.lineTo(rect.x, rect.y + rect.height);
  }
  ctx.stroke();
  ctx.restore();
}
