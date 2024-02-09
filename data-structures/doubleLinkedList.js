class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (this.length === 0 || index >= this.length) return null;
    let counter = 0;
    let middle = Math.floor(this.length / 2);
    let isBigger = index > middle;
    let current;
    isBigger ? (current = this.tail) : (current = this.head);
    if (isBigger) {
      let counterCounter = this.length - 1;
      while (counterCounter > index && current) {
        current = current.prev;
        counterCounter--;
      }

      return counterCounter === index ? current : undefined;
    }

    while (counter < index && current) {
      current = current.next;
      counter++;
    }

    return counter === index ? current : undefined;
  }

  set(i, val) {
    if (this.length === 0 || i >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while (counter < i) {
      current = current.next;
      counter++;
    }
    current.val = val;
    return this;
  }

  insert(i, val) {
    if (i < 0 || i > this.length) return null;
    if (i === 0) {
      return this.unshift(val);
    }
    if (i === this.length) return this.push(val);
    let newNode = new Node(val);
    let beforeNode = this.get(i - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return this;
  }

  remove(i) {
    if(this.length === 0 || i > this.length) return null;
    if(i === 0) return this.shift()
    if(i === this.length - 1) return this.pop();
    let current = this.get(i);
    let prev = current.prev;
    let next = current.next;
    prev.next = current.next;
    next.prev = prev
    this.length--
    return this;
  }

  reverse() {
    let head = this.head;
    this.head = this.tail;
    this.tail = head;
    this.head.next = this.head.prev
    this.head.prev = null;
    let current = this.head.next;
    let counter = 0;
    while(current && counter < this.length - 1) {
      let next = current.next;
      current.next = current.prev;
      current.prev = next;
      current = current.next;
      counter++
    }
    return this.tail;
  }
}

let doubleLinkedList = new DoubleLinkedList();