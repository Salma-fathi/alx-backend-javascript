export  interface Teacher {
    // Define the Teacher interface here
    firstName: string;
    fullTimeEmployee: boolean;
    yearsofExperience?: number;
    lastName: string;
    location: string;
    contract: boolean;
}
const teacher3: Teacher = {
    // Add the teacher1 object
    firstName: 'John',
    fullTimeEmployee: true,
    yearsofExperience: 3,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);

// interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

export interface Directors extends Teacher {
    numberOfReports: number;

}

//Write an interface for the function named printTeacherFunction.

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Define the function named printTeacher that returns a string in the following format: firstName initial. lastName
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// Define the function named printTeacher that returns a string in the following format: firstName initial. lastName
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

// Define the interface named IStudentClass with the following attributes:
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Define the class named StudentClass that implements the IStudentClass interface. The class constructor
export class StudentClass implements IStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}

// Define the function named createStudent that returns a new instance of the StudentClass class
export function createStudent(ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
  return new ctor(firstName, lastName);
}
// Create a new instance of the StudentClass class and display
//const student = createStudent(StudentClass, 'John', 'Doe');
//console.log(student.displayName());
//console.log(student.workOnHomework());
