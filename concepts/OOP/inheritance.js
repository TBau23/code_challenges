// classic vs. prototypical inheritance

// every object in JS inherits from the root object, which has no prototype

function x() {
    this.toString = () => {
        console.log('base object')
    }
}

x.toString()

// when you call for methods or properties on object, JS will walk up the prototype chain to find the desired method/property

// configurable - true -> can delete if wanted
// enumerable - can't loop over it if false
// writable - if true you can overwrite the method
// these are attributes that you can set for your properties

const person = {name: 'Tom'}

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true // if false, the below log wont show name property
})


function Circle(radius) {
    this.radius = radius;

}

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}

const myCircle = new Circle(5)


console.log(myCircle.toString())

// should not modify built in prototypes - only edit those you have created

