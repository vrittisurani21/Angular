"use strict";
class Dog {
    constructor() {
        this.id = 1;
        this.name = 'Brownie';
    }
    bark() {
        console.log(this.id);
        console.log(this.name);
    }
    eat() {
        console.log(this.id);
        console.log(this.name);
    }
}
let dog1 = new Dog();
dog1.bark();
