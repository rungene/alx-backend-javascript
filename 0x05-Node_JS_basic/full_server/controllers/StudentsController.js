const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.setHeader('Content-Type', 'text/plain');

    response.statusCode = 200;
    response.end('This is the list of our students');
    readDatabase(process.argv[2])
      .then(() => {
      
      })
      .catch((error) => {
        response.statusCode = 500;
        response.end(error.message);
      }
  }
}
