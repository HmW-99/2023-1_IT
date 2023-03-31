const fs = require('fs');

//오류나면 절ㅐ경로 다시 지정
fs.readFile('/Users/sopeuteuweeokeompyuteo/Documents/GitHub/2023-1_IT/0331/3-6/readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});
