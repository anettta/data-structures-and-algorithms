// STACKS

// LIFO order

// functions: push, pop, peek, length

var letters = []; // this is our stack

var word = "racecar";

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    alert(word + " is a pallindrome");
} else {
    alert(word + " is not a pallindrome");
}

// another examples implementing stacks
// I can use arrays as stack

// creates a stack
var Stack = function() {
this.count = 0;
this.storage = {};

// adds a value onto the end of the stack
this.push = function(value) { // passing the value only when pushing
    this.storage[this.count] = value;
    this.count++;
    }

    // removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    // returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
alert(myStack.peek());
alert(myStack.pop());
alert(myStack.peek());
myStack.push("freeCodeCamp");
alert(myStack.size());
alert(myStack.peek());
alert(myStack.pop());
alert(myStack.peek());
