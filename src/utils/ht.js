export const findParentView = (parent) => {
  let found = false;
  while (!found) {
    if (parent.gv === undefined) {
      parent = parent.$parent
    } else {
      found = true
    }
  }
  return parent
};