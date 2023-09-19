const fs = require('fs');

function countStudents(filePath) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
      return;
    }
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
    console.log(`Number of students: ${totalStudents}`);
    if (csCount.length > 0) {
      console.log(`Number of students in CS: ${csCount.length}. List: ${csCount.join(', ')}`);
    }
    if (sweCount.length > 0) {
      console.log(`Number of students in SWE: ${sweCount.length}. List: ${sweCount.join(', ')}`);
    }

  });
}
module.exports = countStudents;
