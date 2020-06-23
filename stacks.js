// STACKS


// LIFO order such as stack of books or BACK button: the order of open websites in the browser 

// functions: push, pop, peek, length

// Pallindrome - word spelled the same backwards and forward

var letters = []; // this is our stack ; array has all the functions of the stack

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
this.storage = {}; // empty object

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

    // just returns the value at the end of the stack
    this.peek = function() { // we are not passing the value
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
alert(myStack.peek()); // 2
alert(myStack.pop()); // 2
alert(myStack.peek()); // 1
myStack.push("freeCodeCamp"); 
alert(myStack.size()); // 2
alert(myStack.peek()); // freeCodeCamp
alert(myStack.pop()); // freeCodeCamp
alert(myStack.peek()); // 1
