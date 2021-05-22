// creating objects

const circle = {
    // object literal syntax
    // doesn't make it very easy to create new circles 
    // I have to copy paste it all to make another circle, making bugs much more problematic and hard to find
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function() {
        console.log('draw');
    }
}

// Factory function syntax
function createCircle(radius) {
    return {
        radius, // when you're passing value as parameter you can use this syntax
        location: {
        x: 1,
        y: 1,
    },
    draw: function() {
        console.log('draw');
    }
    }
}

// Constructor function - clearly marked by use of new and this
// bares similarity to class syntax from other languages
function Circle(radius, name) {
    
    // this is a reference to the specific instance of the object that is executing whatever code
    this.radius = radius;
    this.name = name;
    this.draw = function() {
        console.log('draw')
    }
    this.sayName = () => {
        return this.name
    }
}
// new keyword creates an empty object and points to the Circle function in this case. it sort of binds the this keyword to the object
const another = new Circle(2, 'Gerald')
console.log(another.sayName().split(''))
// console.log(another)
// console.log(another.constructor)

// console.log(Circle.constructor)


// factories and constructors

let x = new Object() // this is also object literal syntax
// in the same way, we have string literals and boolean literals but no one ever uses them
new String()
new Boolean()


// every object has a constructor property and it references the function that was used to create that object



// primitives and reference types

// primitives - aka value types
    // number, string, boolean, symbol, undefined, null,

// reference types 
    // object, function, array
    // and all of those are just objects - so really the dichotomy is between primitives and objects

let q = 10;
let y = q;
// these variables hold primitive types - which means they grasp the value directly


// variables pointing to a reference type actually just point to a place in memory, not a value
 
let number = 10;

function increase(number) {
    number++
}

increase(number)
console.log(number) // console logs 10 - 

// versus doing this to an object

let num = {value: 10, name: 'McFred'};

function increase(obj) {
    obj.value++
}

increase(num)


console.log(num) // value will be 11


// working with properties


// private properties
// abstraction is about hiding the details and showing only the essentials
// hide implementation details

function car(color, model) {
    this.color = color;
    this.model = model;
    this.rev = () => {
        console.log("wooohooo I'm a " + this.color + ' ' + this.model)
    }
    // the natural way to hide implementation details is to just declare things that you want to hide
    // as variables, making them invisible to anyone interacting with the object
    
}

const myCar = new car('red', 'Ferrari')
myCar.rev()

// getters/settters