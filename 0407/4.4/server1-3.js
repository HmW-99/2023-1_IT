const https = require('https');
const fs = require('fs');
const workingDir = "Users/sopeuteuweeokeompyuteo/Documents/GitHub/2023-1_IT/0407"

https.createServer({
  cert: fs.readFileSync('${workingDir}/cert/rootCA.crt'),
  key: fs.readFileSync('${workingDir}/cert/rootCA.key'),
  ca: [
    fs.readFileSync('${workingDir}/cert/server.crt'),
    fs.readFileSync('${workingDir}/cert/server.crt'),
  ],
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });