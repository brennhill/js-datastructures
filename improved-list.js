class node {
  constructor(data, next, prev) {
     this.data = data;
     this.next = next;
     this.prev = prev;
  }
  
  toString() {
    return this.data.toString();
  }

}

const testNode = new node("hello", null, null);

console.log(testNode.toString());
