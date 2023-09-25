const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const studentData = {
          CS: [],
          SWE: [],
        };
        const lines = data.split('\n').slice(1);
        for (let i = 0; i < lines.length; i += 1) {
          const line = lines[i].trim();
          const words = line.split(',');
          if (words.length > 0) {
            const lastWord = words[words.length - 1];
            if (lastWord === 'CS' || lastWord === 'SWE') {
              studentData[lastWord].push(words[0])  
            }
          }
        }
        resolve(studentData);
      }
    });
  });
}
module.exports = readDatabase;
