interface Animal{

    id:number;
    name:string;

    bark():void;
    eat():void;
}

class Dog implements Animal{
    
     id:number;
     name:string;

    constructor(){
        this.id = 1
        this.name='Brownie'
    }

    bark(): void {
        console.log(this.id);
        console.log(this.name);
    }

    eat(): void {
        console.log(this.id);
        console.log(this.name);
    }

}

let dog1 = new Dog()
dog1.bark()