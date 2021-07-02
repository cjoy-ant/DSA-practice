const _Node = require('./node')

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst = (value) => {
    this.head = new _Node(value, null)
  }

  insertLast = (value) => {
    if(!this.head){
      return null
    }

    let currNode = this.head
    while (currNode.next){
      currNode=currNode.next
    }

    currNode.next = new _Node(value,null)
  }

  find = (value) => {
    if(!this.head){
      return null
    }

    let currNode = this.head
    while(currNode && currNode.value !== value){
      currNode=currNode.next
    }

    return currNode
  }

  remove = (value) => {
    if (!this.head){
      return null
    } else if (this.head.value === value){
      this.head = this.head.next
    }
    let currNode = this.head
    let prevNode = this.head
    while (currNode && currNode.value !== value){
      prevNode = currNode
      currNode = currNode.next
    }
    if (!currNode.next){
      return "not found"
    }
    prevNode.next = currNode.next
  }

  middle = () => {
    if(!this.head){
      return null
    } else if (!this.head.next){
      return this.head
    }
    let end = this.head
    let middle = this.head
    while(end && end.next){
      end = end.next.next
      middle = middle.next
    }
    return middle
  }
}

module.exports = LinkedList