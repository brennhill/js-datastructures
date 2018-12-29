class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
  
  toString() {
    return this.data.toString();
  }
  
}

export default class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  append(data) {
    const node = new Node(data);
    
    this.length++;
    if(!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    
    return this;
  }
  
  
}
