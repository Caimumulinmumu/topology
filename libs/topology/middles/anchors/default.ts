import { Node } from '../../models/node';
import { Rect } from '../../models/rect';

export function defaultAnchors(node: Node) {
  // up
  node.anchors.push(new Rect(node.rect.x + node.rect.width / 2 - 4, node.rect.y - 4, 8, 8));
  // right
  node.anchors.push(new Rect(node.rect.x + node.rect.width - 4, node.rect.y + node.rect.height / 2 - 4, 8, 8));
  // bottom
  node.anchors.push(new Rect(node.rect.x + node.rect.width / 2 - 4, node.rect.y + node.rect.height - 4, 8, 8));
  // left
  node.anchors.push(new Rect(node.rect.x - 4, node.rect.y + node.rect.height / 2 - 4, 8, 8));
}
