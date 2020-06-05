// Hash table - unordered associative array
// invented 1953
// time complexity : space O(n), search/insert/delete O(1) in average case and O(n) in the worst case
// maps strings(keys) to numbers(hashes) through a hash function

var hash = (string, max) => { // max is number of buckets within hash
    var hash = 0;
    for (i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
};

let HashTable = function() {
    let storage = [];
    const storageLimit = 4;
    this.print = function() {
        alert(storage)
    }

    this.add = function(key, value) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }

    };
    this.remove = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index]; i++) {
                if (storage[index][i][0] === key) { // i = key 0 = value
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };
};

alert(hash("cat", 15)) // 15 is a number of buckets

let hashtable = new HashTable();
hashtable.add('parrot', 'pet');
hashtable.add('fish', 'currentPet');
hashtable.add('dress','clothes');
alert(hashtable.lookup('fish'));
hashtable.print();