interface Teacher {
readonly  firstName: string;
readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const user: Teacher = {
  firstName: "simo",
  lastName: "smith",
  fullTimeEmployee: true,
  yearsOfExperience: 2,
  location: "Marrakech",

}
interface Directors extends Teacher {
    numberOfReports: number;
}

// function printTeacher (firstName : string , lastName : string) : string{
//   return `${firstName[0]}. ${lastName}`
// }
// console.log(printTeacher("simo", "smith"))

interface PrintTeacherFunction {
  (firstName: string , lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName , lastName) => {
 return `${firstName[0]}. ${lastName}`
}

console.log(printTeacher("simo", "smith"))

interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Interface for the class instance
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class that implements the instance interface
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Using the constructor interface
const createStudent = (ctor: StudentConstructor, firstName: string, lastName: string): StudentClassInterface => {
  return new ctor(firstName, lastName);
};

const student = createStudent(StudentClass, "Mohamed", "Bennani");
console.log(student.displayName()); // Mohamed
