/**
 * Export `fragment`
 */

module.exports = fragment;

/**
 * Create `fragment` node
 *
 * @param {Array} children
 * @return {Object} fragment
 */

function fragment(children) {
  return {
    nodeType: 1,
    childNodes: children,
    parentNode: null,
    nextSibling: null,
    previousSibling: null,
    nodeName: '#fragment'
  };
}