interface Student {
  firstName: string;
  lastName: string;
  age: number;
}

class StudentClass {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const student1: Student = new Student();
const student2: Student = new Student();

const studentsList = [...student1, ...student2];


