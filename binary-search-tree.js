class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(this.root === null){
      this.root = new Node(val)
      return this
    }

    let current = this.root;

    while(true){
      if(val < current.val){
        if(current.left === null){
          current.left = new Node(val);
          return this
        } else {
          current === current.left;
        }
      } else if (val > current.val){
        if(current.right === null){
          current.right = new Node(val);
          return this;
        } else {
          current === current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if(this.root === null){
      this.root = new Node(val)
      return this;
    }

    if(val < current.val){
      if(current.left === null){
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left)
    } else {
      if(current.right === null){
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    let found = false;

    if(val === currentNode) return currentNode;

    while(currentNode && !found) {
      if(val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val){
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return currentNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(this.root === null) return undefined;

    if(val < current.val) {
      if(current.left === null) return undefined;
      return this.findRecursively(val, current.left)
    } else if (val > current.val){
      if(current.right === null ) return undefined;
      return this.findRecursively(val, current.right);
    }

    return current;

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let current = this.root

    const traverse = (node) => {
      data.push(node.val);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }

    traverse(current)
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let current = this.root;

    const traverse = (node) => {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }

    traverse(current);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    const traverse = (node) => {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.val);
    }

    traverse(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root
    let data = []
    let queue = []

    queue.push(node)

    while(queue.length){
      node = queue.shift();
      data.push(node.val);
      if(node.left) {
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let node = this.root;
    let parent;

    while(node.val !== val){
      parent = node;
      if(val < node.val){
        node = node.left
      } else {
        node = node.right
      }
    }

    if(node !== this.root){
      if(node.left === null && node.right === null){
        if(parent.left === node){
          parent.left = null
        } else {
          parent.right = null
        }
      } else if (node.left !== null && node.right !== null){
        let rightParent = node;
        let right = node.right;
        if(right.left === null){
          right.left = node.left;
          if(parent.left === node){
            parent.left = right;
          } else {
            parent.right = right;
          }
        } else {
          while(right.left !== null){
            rightParent = right;
            right = right.left;
          }
          if(parent.left === node){
            parent.left.val = right.val;
          } else {
            parent.right.val = right.val;
          }
          if(right.right !== null){
            rightParent.left = right.right
          } else {
            rightParent.left = null;
          }
        }
      } else {
        if(parent.left === node){
          if(node.right === null){
            parent.left = node.left;
          } else {
            parent.left = node.right
          }
        } else {
          if(node.right === null){
            parent.right = node.left
          } else {
            parent.right = node.right;
          }
        }
      }
    }

    return node;
  }

}

module.exports = BinarySearchTree;
