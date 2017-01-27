const Node = require('./node');

class LinkedList {
	
      constructor() {
		this.length = 0;
		/* this._head = null;
		this._tail = null; */
	}
	

    append(data) {
		var el = new Node(data);
		console.log (this._head instanceof Node);
		
		if (this.isEmpty()) {
			this._head = this._tail = el;
		} else {
			this._tail.next = el;
			el.prev = this._tail;
			this._tail = el;
		}
		
		this.length++
		return this;
	}

    head() {
		return this._head.data;
	}

    tail() {
		return this._tail.data;
	}

    at(index) {
		var Node = this._head;
		var i = 0;
		
		if ( index < 0 || index > this.length) {
			return;
		}
		
		while (i != index) {
			Node = Node.next;
			i++;
		}
		
		return Node.data;
	}

    insertAt(index, data) {
		var el = new Node(data);
		
		if (index < 0 || index > this.length - 1) {
			return;
		}
		var i = 0;
		var _Node = this._head;
		
		while (i != index) {
			_Node = _Node.next;
			i++;
		}
		
		if (index == 0) {
			this._head.prev = el;
			el.next = this._head;
			this._head = el;
			this.length++;
		}
		else if (index == this.length) {
			this.append(data);
		} 
		else {
			el.prev = _Node.prev;
			el.next = _Node;
			el.prev.next = el;
			_Node.prev = el;
			this.length++;
		}
		return el.data;
		
		
	}

    isEmpty() {
		return this.length == 0 ? true : false;
	}

    clear() {}

    deleteAt(index) {
	}

    reverse() {}

    indexOf(data) {}
	
}

module.exports = LinkedList;
