const Node = require('./node');

class LinkedList {
	
      constructor() {
		this.length = 0;
		
	}
	

    append(data) {
		var el = new Node(data);
		
		
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
		
		if ( index < 0 || index > this.length - 1) {
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

    clear() {
		this._head.data = null;
		this._tail.data = null;
		this.length = 0;
		return this;
	}

    deleteAt(index) {
		if (index == 0) {
			this._head.data = null;
			this._head.next = this._head;
			this._head.prev = null;
			this.length--;
			return this;
		}
		if (index == this.length) {
			this._tail.data = null;
			this._tail.prev = this._tail;
			this._tail.next = null;
			this.length--;
			return this;
		}
		
		var _Node = this._head;
		var i = 0;
		
		if ( index < 0 || index > this.length) {
			return;
		}
		
		while (i != index) {
			_Node = _Node.next;
			i++;
		}
		
		_Node.data = null;
		_Node.prev.next = _Node.next;
		_Node.next.prev = _Node.prev;
		this.length--;
		return this;
	}

    reverse() {
		var help = [];
		var _Node = this._head;
		for (var i = 0; i < this.length; i++) {
			help[i] = _Node.data;
			_Node = _Node.next;
		}
		help.reverse();
		_Node = this._head;
		for (var i = 0; i < help.length; i++) {
			_Node.data = help[i];
			_Node = _Node.next;
		}
		return this;
	}

    indexOf(data) {
		var _Node = this._head;
		for (var i = 0; i < this.length - 1; i++) {
			if (_Node.data == data) return i;
			_Node = _Node.next;
		}
		if (_Node.data === data) return i;
		else return -1;
	}
	
}

module.exports = LinkedList;
