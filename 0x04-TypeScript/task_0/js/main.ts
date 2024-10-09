export interface Student {
    // Define the Student interface here
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const Student1: Student = {
    firstName: 'John', // Add the Student1 object
    lastName: 'Doe',
    age: 20,
    location: 'New York',
};

const Student2 : Student ={
    firstName : 'Jane', // Add the Student2 object
    lastName: 'Selma',
    age: 25,
    location:'California',

};

const studentsList: Array<Student> = [
    Student1,  // Add the Student1 object to the array
    Student2
];

export const renderTable = ( studentsList: Array<Student>): void => {
    //  Create the table element
    const table = document.createElement('table');
    const headRow = document.createElement('tr');
    table.insertAdjacentElement('beforebegin' , headRow);

    // insert the table header
    headRow.insertAdjacentHTML('beforeend', '<tr><th>FirstName</th><th>Location</th></tr>');
    
    for (const student of studentsList) {
        const bodyRow = document.createElement('tr');
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td><td>${student.location}</td>`);
        table.insertAdjacentElement('beforeend', bodyRow);
    }
    document.body.insertAdjacentElement('beforeend', table);
}

// Call the renderTable function with the studentsList array as an argument
renderTable(studentsList);
