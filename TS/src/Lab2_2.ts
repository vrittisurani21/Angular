class Person {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    getName(): string {
      return this.name;
    }
  }
        
  const person = new Person("Vritti");
  
  console.log(person.getName());