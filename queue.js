// Queues

function Queue () {
    collection = [];
    this.print = function() {
        alert(collection);
    };
    this.enqueue = function(element) {
        collection.push(element);
    };
    this.dequeu = function() {
        return collection.shift(); // pulls up and removes the first item of the array
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

var q = new Queue();

q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeu();
alert(q.front());
q.print();

function PriorityQueue() {
    var collection = [];
    this.printCollection = function() {
        alert(collection);
    };
    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (var i=0; i<collection.length; i++){
                if (element[1] < collection[i][1]) { // checking priorities
                collection.splice(i,0,element); //adding the element
                added = true;
                break;
            }
        }
        if (!added) {
            collection.push(element);
        }
    }
};
this.dequeu = function() {
    var value = collection.shift();
    return value[0];
};
this.front = function() {
    return collection[0];
};
this.size = function() {
    return collection.length;
};
this.isEmpty = function() {
    return (collection.length === 0);
};

}

var pq = new PriorityQueue();
pq.enqueue(['Cherry', 2]);
pq.enqueue(['Apple', 3]);
pq.enqueue(['Pear', 1]);
pq.printCollection();
pq.dequeu();
alert(pq.front());
pq.printCollection();
