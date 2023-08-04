interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;

  constructor(firstName: string, lastName: string, age: number, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
}

const student1: Student = new StudentClass('Jack', 'Kibe', 20, 'Nairobi');
const student2: Student = new StudentClass('Clevers', 'Kiprotich', 25, 'Lagos');

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

let thead: HTMLTableElement = table.createTHead();
let trow: HTMLTableRowElement = thead.insertRow();
let data = Object.keys(studentsList[0]);
delete data.lastName;
delete data.age;

for (let key of data) {
  let th = document.createElement('th');
  let text = document.createTextNode(key);
  th.appendChild(text);
  trow.appendChild(th);
}
const keySkip = ['lastName', 'age'];

for (let element of studentsList) {
  let row: HTMLTableRowElement = table.insertRow();
  for (key in element) {
    if (!keySkip.includes(key)) {
      let cell: HTMLTableCellElement = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
