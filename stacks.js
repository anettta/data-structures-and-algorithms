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

