/**
 * Represents a stack item.
 */
class Item {
  constructor(data, last) {
    this._data = data;
    this._last = last;
  }
  get data() {
    return this._data;
  }
  get last() {
    return this._last;
  }
}

/**
 * A stack data structure implemented without using an array or built in methods.
 */
class Stack {
  constructor() {
    this._last = null;
    this._length = 0;
  }
  pop() {
    const top = this._last;
    if(this._length>0 && top) {
      this._last = top._last;
      this._length--;
      return top.data;
    }
    return null;
  }
  push(data) {
   
    const item = new Item(data, this._last);
    this._last = item;
    this._length++;
  }
  
  top() {
    if(this._last) {
      return this._last.data;
    }
    return null; // End of Stack
  }
  
  get length() {
    return this._length;
  }
}


/**
 * The stack in action.
 */

const stack = new Stack();

stack.push("1");
stack.push("2");
stack.push("3");
console.log(`stack length: ${stack.length}`);
console.log(`top of stack: ${stack.top()}`);
console.log(`First pop result: ${stack.pop()}`);
console.log(`Second pop result: ${stack.pop()}`);
console.log(`Third pop result: ${stack.pop()}`);
console.log(`Forth pop result: ${stack.pop()}`);