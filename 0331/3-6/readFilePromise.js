const fs = require('fs').promises;

fs.readFile('/Users/sopeuteuweeokeompyuteo/Documents/GitHub/2023-1_IT/0331/3-6/readme.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
