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

class List {
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


let list = new List();
list.append("Item!");

console.log(list.length);
console.log(list.head);

list = new List();

list.append("First");
list.append("Second");
list.append("Third");
list.tail.next = list.head;
let current = list.head;
while (current.next) {
   console.log(current.data);
   current = current.next;
}
