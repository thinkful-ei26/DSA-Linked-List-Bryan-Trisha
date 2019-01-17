'use strict';

class _Node {
  constructor(item, next){
    this.item = item;
    this.next = next;
  }
}

class LinkedList {
  constructor(head){
    this.head = null;
  }

  // 5 10 15 = 
  // (10) next = null
  // this.next = new Node(item, null) 

  insertLast(item){
    // Check and see if we have a current list
    // Check to see if next is pointing to null
    // Change this.next to this.head
    // Create a new node given the parameters
    if (this.head === null) {
      this.insertFirst(item); 
    } else {
      let tempNode = this.head;
      while (this.next !== null) {
        // go to the next value this.next
        tempNode = tempNode.next; 
      }
      tempNode.next = new _Node(item, null);       
      // this.head = this.head
    }
  }

  insertFirst(item){
    //relocate the head to the new Node
    //once we insert 5 at the beginning, we want new Node's next to be this.head (previously 10)
    this.head = new _Node(item, this.head);
  }

  find(){

  }

  remove(){

  }
}