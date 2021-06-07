// // Every object (except the root object) has a prototype (parent). 
// // To get the prototype of an object:
// Object.getPrototypeOf(obj); 

// // In Chrome, you can inspect "__proto__" property. But you should 
// // not use that in the code. 

// // To get the attributes of a property:
// Object.getOwnPropertyDescriptor(obj, 'propertyName');

// // To set the attributes for a property:
// Object.defineProperty(obj, 'propertyName', {
//     configurable: false,    // cannot be deleted
//     writable: false,
//     enumerable: false
// });

// // Constructors have a "prototype" property. It returns the object 
// // that will be used as the prototype for objects created by the constructor. 
// Object.prototype === Object.getPrototypeOf({})
// Array.prototype === Object.getPrototypeOf([])

// // All objects created with the same constructor will have the same prototype. 
// // A single instance of this prototype will be stored in the memory. 
// const x = {};
// const y = {};
// Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// // Any changes to the prototype will be immediately visible to all objects 
// // referencing this prototype. 

// // When dealing with large number of objects, it's better to put their
// // methods on their prototype. This way, a single instance of the methods
// // will be in the memory. 
// Circle.prototype.draw = function() {}

// // To get the own/instance properties:
// Object.keys(obj);

// // To get all the properties (own + prototype): 
// for (let key in obj) {}



//exercise
function StopWatch() {

    this.startTime = 0;
    this.stopTime = 0;
    this.running = false;


}

// if you move all of these methods to the prototype, then you have to make the variables (startTime, stopTime, and running publicly visible)



StopWatch.prototype.start = function() {
    if(this.running) {
        throw new Error('Watch already started')
    }

    this.running = true

    this.startTime = Date.now();
}

StopWatch.prototype.stop = function() {
    if(!this.running) {
        throw new Error('Watch already stopped')
    }

    this.running = false;

    this.stopTime = Date.now();
}

StopWatch.prototype.interval = function() {
    if(this.running) {
        console.log((Date.now() - this.startTime) / 1000)
    } else if(!this.running && this.startTime != 0) {
        console.log((this.stopTime - this.startTime) / 1000)
    } else {
        throw new Error('Watch has never started')
    }
}

StopWatch.prototype.reset = function() {
    this.startTime = 0;
    this.stopTime = 0;
}

const myWatch = new StopWatch();


