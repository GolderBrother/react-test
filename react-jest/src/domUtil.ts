export function removeNode(node: Element | null) {
  node && node.parentNode.removeChild(node);
}

export function addEventListener(
  node: Element | null,
  type: string,
  listener: (this: Element, ev: Event) => any
) {
  node && node.addEventListener(type, listener);
}
