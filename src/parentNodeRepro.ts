export function getRoot(node: Node): ParentNode | null {
  let parent = node.parentNode;

  while (parent) {
    parent = parent.parentNode;
  }

  return parent;
}
