const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the file into lines and filter out empty lines
    const lines = data.split('\n')
      .filter(line => line.trim() !== '' && !line.startsWith('firstname'));
    
    // Total number of students
    const numberOfStudents = lines.length;
    console.log(`Number of students: ${numberOfStudents}`);
    
    // Group students by field
    const studentsByField = lines.reduce((acc, line) => {
      const [firstname, , , field] = line.split(',');
      
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(firstname);
      
      return acc;
    }, {});
    
    // Print number of students and list for each field
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    // Throw error if file cannot be read
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
