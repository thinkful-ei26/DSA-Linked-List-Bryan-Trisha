'use strict';

class _Node {
  constructor(value, next){
    this.value=value;
    this.next=next;
  }
}

//You have a list, but it's empty
class LinkedList {
  constructor(){
    this.head = null;
  }

  insertLast(item){
    //error check, if it's an empty list, insert the item as the first item. 
    if(this.head === null){
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      //traverse the list from the head (start)

      //as long as the next pointer of the node is not null, continue to follow the next node
      //1) is 10 pointing to null? no, then 
      while(tempNode.next !== null){ //we can't always use a for loop because we don't know the length of the list. You can only traverse the list until you find a pointer that 
        tempNode = tempNode.next; //2) 5 => 10 
      }
      tempNode.next = new _Node(item, null); //when you get to the end of your list 
    }
  }

  insertFirst(item){
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

  remove(item){ 
    //if the list is empty
    if (!this.head){
      return null;
    }
    //if the node to be removed is head, make the next node head
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  // given a node
  // value F head = null
  // (f, null)
  // (f)
  

  // item('E')
  //input: C -> D  -> F -> M  //item E, given F
  //output: C -> D -> E -> F -> M
  // D will point F
  // F will point to null

  // currNode = F
  // E will point to F 
  // D -- how do we know what D is? -> will point to E 
  //1. traverse the linked list
  //2. find given 
  insertBefore(item, given) {
    let currNode = this.head; // d
    let prevNode = this.head; // c
    //if the list is empty
    //Check for the item 
    if (!this.head){
      return null;
    }
  
    while(currNode.value !== given){
      prevNode = currNode; // d
      currNode = currNode.next;
    } //(f)
    if(currNode.value === given){
      // instantiate a new node passing in the item variable with the next value of the node prior to 
      let newNode = new _Node(item, prevNode.next);
      // reset the previous node's value of next to point to the newly created node
      prevNode.next = newNode;
    }
  }

  // input: C -> D -> F (F is our Node, has a head === null)
  // output: C-> D -> E -> F (E is referencing F as its head)
  // currNode = D
  // D will point to E 
  // E will point to where D used to point

  insertAfter(item, given){  // Hotdog, Helo
    // Iterate through the list and search for a node, store the next value (if any). 
    // Point that found node to the newly created node. 
    // Set the next value of the newly created node to reference the found node's next (if there was any)
    let oldNode = this.head; //Tauhida
    let currNode = this.head; //Helo
    //if the list is empty
    //Check for the item 
    if (!this.head){
      return null;
    }
    while(currNode.value !== given){
      oldNode = currNode; //(d) -> f
      currNode = currNode.next; //(f)-> null
    }
    if(currNode.value === given){
      // instantiate a new node passing in the item variable with the next value of the node prior to 
      let newNode = new _Node(item, currNode.next);  // Hotdog, {helo}
      // reset the previous node's value of next to point to the newly created node
      currNode.next = newNode;
    }
  }
  
  //input: (item, position)  (kat, 3)
  // Husker, Tauhida, Helo, Hotdog, Boomer, Apollo
  //output: Husker, Tauhida, Kat, Helo, Hotdog, Boomer, Apollo
  // traverse through the list, keeping count at each traversal
  insertAt(item, position){
    let counter = 1; //3
    let oldNode = this.head; //Tauhida
    let currNode = this.head; //Helo
    if (!this.head) {
      return null; //why are we returning null, can we insert new _Node(item)
    }
    while(counter < position) {
      oldNode = currNode; // Tauhida
      currNode = currNode.next; //Helo
      counter++;
    } if (counter === position) {
      let newNode = new _Node(item, oldNode.next);
      oldNode.next = newNode;
    }

  }
}

// Input: C->D->M->0->P   insert E  (edge case: Z, A)
// Output: C->D->E->M->0->P  

// function insertInSortedOrder(sll, item){

//   let current = sll.head;
//   let previous = sll.head;

//   //inserts at the beginning (A)
//   if(item < sll.head.value){ //if the list is empty
//     //insertFirst()
//     this.head = new _Node(item, this.head);
//     return sll;
//   }

//   while(current){
//     if(current.value > item){ 
//       previous.next = new _Node(item, current);
//       return sll;
//     }
//     previous = current;
//     current = current.next;
//   }
//   //insert at the end (Z)
//   previous.next = new _Node(item, null);
//   return sll;
// }

function main(){
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Tauhida');
  // console.log(SLL.insertFirst('Husker'));
  // // SLL.insertFirst('Starbuck');
  // console.log(SLL.find('Apollo'));
  // SLL.remove('squirrel');
  // SLL.insertAfter('Hotdog', 'Helo');
  // // SLL.insertBefore('Athena', 'Boomer');
  // SLL.insertAt('Kat', 3);
  // SLL.remove('Tauhida');
  // console.log(JSON.stringify(SLL, null, 2));
  // display(SLL);
  // size(SLL);
  // isEmpty(SLL);
  // console.log('---', JSON.stringify(findPrevious('Helo', SLL), null, 2));
  // console.log('last node:',findLast(SLL));
  console.log('----', reverseList(SLL));
  console.log('---', recursiveReverse());
}

// Add Athena before Boomer using your insertBefore() function
// Add Hotdog after Helo using the insertAfter() method

function display (list) {
  console.log('---', JSON.stringify(list, null, 2));
}

function size (list) {
  // console.log(list.head);
  // console.log(Object.keys(list.head));
  let counter = 0;
  let currNode = list.head;
  while(currNode !== null){
    currNode = currNode.next;
    counter++;
    // console.log(counter);
  }
  // console.log(counter);
}

function isEmpty (list) {
  list.head === null
    ? true  
    : false; 
}


function findPrevious (item, list) {
  if (!list.head){
    return null;
  }
  // Iterate through the list
  // Store previous and current node
  // Store the prev node .next value
  let previousNode = list.head; 
  let currentNode = list.head;
  while (currentNode.value !== item) {
    // console.log('-----', currentNode);
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  return previousNode;

}

// traverse the list next === null
// log currNode
function findLast (list) {
  let currNode = list.head;
  console.log(currNode.next);
  while(currNode.next !== null){
    currNode = currNode.next;
  } return currNode;
}

main();

// CAT -> DOG  -> PIG -> RABBIT
//newNode = CAT
// newNode.next CAT = PIG 
// otherwise = rabbit = null

// function WhatDoesThisProgramDo(lst){
//   let current = lst.head; // CAT
//   while(current !== null){ 
//     let newNode = current; //CAT
//     while (newNode.next !== null) {
//       if (newNode.next.value === current.value) { // if my next pointer is equal to my current node value
//         newNode.next = newNode.next.next; //PIG  // set my next pointer to the one after that
//       } else { // otherwise
//         newNode = newNode.next; //CAT, next RABBIT // set my node equal to the next one
//       }
//     }
//     current = current.next; // start over again
//   }
// }

//change the pointers
// O(n) => linear
// A -> B -> C -> D -> E

// currNode.next = null
// currNode = 

// first item on the list: list.head
// last item on the list
// traverse through the list, 
// check the head, if .next === null, grab the currentNode = next = null 
/* {

    {item: d, next { item: e, next: null}, 
    { item: e, next: null} 
  }

*/

// C points to D which points to E
// Make E point to D which point to C
// traverse the list, have currentNode .next 
// const reverse = list => {
//   let currNode = list.head;
//   let prevNode = list.head;
 
// };

function reverseList(list) {
  let node = list;
  let previous = null;
  while (node) {
    // store the next value
    let save = node.next;
    // reverse the pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node or null at end of list
    node = save;          
  }
  return previous;      
}

const recursiveReverse = (head) => {
  if (!head || !head.next) {
    return head;
  }
  let temp = recursiveReverse(head.next);
  head.next.next = head;
  head.next = undefined;
  return temp;
};