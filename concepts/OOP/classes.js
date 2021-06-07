// classes in javascript

// classes were implemented in ES6 and basically serve as syntactic sugar over the inheritance system


class Circle {
    constructor(radius) {
        this.radius = radius;
        
    }

    // this will be on prototype with this style of definition
    // instance method - when you draw, you would want it to draw a specific instance
    draw = () => {
        console.log('draw');
        
    }

    // static methods are often used for general purpose utility functions that dont depend on the instance details
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
        // think of the Math class - has a bunch of static methods
    }

}

const myC = new Circle(2)

console.log(myC)



class Math2 {
    static abs(value) {
        // takes an input - has nothing to do with instance of math object
    }

}

// abstraction - one of the core concepts of OOP - is just hiding the complexity and give the user and interface that shows only what they need
// the underscore convention for making private properties is a convention that doesn't actually do anything
// ES6 added the primitive type symbol

const _color = Symbol();
// no symbol calls are the same - 
const _draw = Symbol();

class Square {
    constructor(color) {
        this[_color] = color;
    }

    [_draw]() {

    }
}

const s = new Square('green');
console.log(Square.prototype)
console.log(Object.getOwnPropertySymbols(s)[0])
