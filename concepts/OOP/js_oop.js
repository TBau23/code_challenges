// combining related properties and methods into an object
// encapsulation - group related variables and functions that operate onto them into objects - this is called encapsulation
// encapsulation allows you to keep your functions very clean - limit parameters

let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        console.log(this.baseSalary + (this.overtime * this.rate))
    }
}

employee.getWage()


// abstraction makes the interface of our object simpler to work with. reduce complexity

// inheritance allows us to eliminate redundant code 
// example is all of the properties of html elements - e.g. they should all have click()  focus() etc. 
// using inheritance intelligently allows us to save time not having to redefine all of these methods

// polymorphism - technique that allows us to get of switch/ case 