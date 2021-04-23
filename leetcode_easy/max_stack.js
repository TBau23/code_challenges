var MaxStack = function() {
    this.elements = [];
    this.maxes = []
};


MaxStack.prototype.push = function(x) {
    this.elements.push(x);
    this.maxes.push(x)
    this.refreshMax()
};

MaxStack.prototype.refreshMax = function() {
    this.maxes.sort((a,b) => a - b)
}

MaxStack.prototype.pop = function() {
    const lastItem = this.elements[this.elements.length - 1];
    this.elements.pop();
    const maxIdxOfPop = this.maxes.indexOf(lastItem);
    this.maxes.splice(maxIdxOfPop, 1)
    
};


MaxStack.prototype.top = function() {
    return this.elements[this.elements.length - 1];
};


MaxStack.prototype.peekMax = function() {
    return this.maxes[this.maxes.length - 1];
};


MaxStack.prototype.popMax = function() {
    const maxToPop = this.maxes[this.maxes.length - 1];
    this.maxes.pop();
    const idxOfMax = this.elements.lastIndexOf(maxToPop)
    this.elements.splice(idxOfMax, 1)
};

let myStack = new MaxStack();
myStack.push(5)
myStack.push(1)
myStack.push(5)
console.log(myStack)
console.log(myStack.top())
myStack.popMax()
console.log(myStack)
console.log(myStack.top())
console.log(myStack.peekMax())
myStack.pop()
console.log(myStack)
console.log(myStack.top())