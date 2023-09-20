const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.method === 'GET') {
    if (req.url === '/') {
      res.statusCode = 200;
      res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
      res.write('This is the list of our students\n');
      if (!process.argv[2]) {
        res.statusCode = 500;
        res.end('File path not provided');
        return;
      }
      fs.readFile(process.argv[2], 'utf-8', (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end('Cannot load the database');
        } else {
          res.statusCode = 200;
          const sweCount = [];
          const csCount = [];
          const lines = data.split('\n').slice(1);
          for (let i = 0; i < lines.length; i += 1) {
            const line = lines[i].trim();
            const words = line.split(',');
            if (words.length > 0) {
              const lastWord = words[words.length - 1];
              if (lastWord === 'CS') {
                csCount.push(words[0]);
              } else if (lastWord === 'SWE') {
                sweCount.push(words[0]);
              }
            }
          }
          const totalStudents = sweCount.length + csCount.length;
          res.write(`Number of students: ${totalStudents}\n`);
          if (csCount.length > 0) {
            res.write(`Number of students in CS: ${csCount.length}. List: ${csCount.join(', ')}\n`);
          }
          if (sweCount.length > 0) {
            res.write(`Number of students in SWE: ${sweCount.length}. List: ${sweCount.join(', ')}`);
          }
          res.end();
        }
      });
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
