export function getRoot(node: Node): HTMLElement | null {
  let parent = node.parentElement;

  while (parent) {
    parent = parent.parentElement;
  }

  return parent;
}
