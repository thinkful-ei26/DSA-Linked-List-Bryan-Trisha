'use strict';

class _Node {
  constructor(item, next){
    this.item = item;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
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
      while (tempNode.next !== null) {
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

  find(item) { 
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head){
      return null;
    }
    //Check for the item 
    while(currNode.value !== item) {
      //return null if end of the list 
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking 
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  // remove(){

  // }
}

function main(){
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  console.log(SLL.insertFirst('Husker'));
  // SLL.insertFirst('Starbuck');
  console.log(JSON.stringify(SLL, null, 2));
  console.log(SLL.find('Apollo'));
}

console.log(main());