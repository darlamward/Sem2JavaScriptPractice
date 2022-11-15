
// Practice Question: Create a class "Person" having some generic fields, all fields are setup by a constructor function. 
//and also there must be  a function "displayAddress" that display the address of the Person which is calling it....

class Person {
    constructor(firstName, lastName, petName, petType, street, city, province) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.petName = petName;
        this.petType = petType;
        this.street = street;
        this.city = city;
        this.province = province;
    }

    getAddress() {
        return `The address of this person is ${this.street}  ${this.city}, ${this.province}.`;
    }

    getPet() {
        return `Their pet name is ${this.petName} and it is a ${this.petType}.`
    }
}

var person1 = new Person("Jane", "Brooks", "Drake", "Gecko", "19 Pearson Ave.", "St. John's", "NL")

console.log(person1);
console.log(person1.getPet());
console.log(person1.getAddress());