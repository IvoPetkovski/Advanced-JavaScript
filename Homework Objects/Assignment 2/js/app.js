
function Student(firstName, lastName, address, currentSubject){
    this.firstName = firstName
    this.lastName = lastName
    this.address = address;
    this.currentSubject = currentSubject;

    this.getFullName = function() {
        return `The full name of the student is ${this.firstName} ${lastName}.`;
    }

    this.getAdress = function() {
        return `${this.address.city}, ${this.address.street} ${this.address.number}`
      }
    
}

function Address(street, number, city){
    this.street = street;
    this.number = number;
    this.city = city;
}


let pero = new Student('Perica', 'Perovski', new Address('Partizanska', 'bb', 'Skopje'), 'AJS');

console.log(pero);