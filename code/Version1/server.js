const express = require('express');
const server = express();

server.all('/', (req, res) => {
  res.send('<h1>It lives!</h1>')
})
function keepAlive(){
  server.listen(3000, ()=>{console.log("Server Ready!")});
}
module.exports = keepAlive;
