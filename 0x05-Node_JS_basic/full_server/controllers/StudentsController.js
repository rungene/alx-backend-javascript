const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try{
        const studentData = await readDatabase(process.argv[2]);
        response.status(200);
        response.send('This is the list of our students\n');
        // An object to store students count for each field
        const studentCount = {};
        // // Get an array of field names and sort them alphabetically case-insensitively
        const sortedFields = Object.keys(studentData).sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));
        sortedFields.forEach((field) => {
          const students = studentData[field];
          const count = students.length;

          // Maintain a list of first names in the order they appear in the database file
          const nameInOrder = students.join(', ');

          studentCount[field] = {
            count,
            nameInOrder,
          };
        });
        // Iterate through the sorted fields and display the counts and lists of first names
        sortedFields.forEach((field) => {
          const {count, nameInOrder} = studentCount[field];
          response.write(`Number of students in ${field}: ${count}. List: ${nameInOrder}\n`);
        });
      } catch(error) {
        response.status(500);
        response.send('Cannot load the database\n');
      }
  }
}
