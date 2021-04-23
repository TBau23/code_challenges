// build a stack data structure that suppports these
// getMin just needs to return the minimum element in the stack


var MinStack = function() {
    this.elements = [];
};


MinStack.prototype.push = function(val) {
    this.elements.push({
        'value': val,
        'min': this.elements.length === 0 ? val : Math.min(val, this.getMin())
    })
};


MinStack.prototype.pop = function() {
    this.elements.pop()
};


MinStack.prototype.top = function() {
    return this.elements[this.elements.length - 1].value;
};


MinStack.prototype.getMin = function() {
    // must be constant time
    return this.elements[this.elements.length - 1].min
};

let myStack = new MinStack()
myStack.push(-2);
myStack.push(0);
myStack.push(-3)

