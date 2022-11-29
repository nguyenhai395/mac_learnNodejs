// const http = require('http');

// const server = http.createServer((req, res) => {

//     console.log('run request')
//     res.setHeader('Content-type', 'text/html')
//     // res.write('Content-Type', 'text/html');
//     res.write(' Xin chao NguyenHai');
//     res.end();
// })

// server.listen(8080, 'localhost', () => {
//     console.log('Node js is running in port 8080 ')
// })

// const http = require('http')
// const server = http.createServer((req, res) => {
//     console.log('run request');
//     res.setHeader('Content-type', 'text/html')
//     res.write(' Well come to learn nodejs with HarryNg')
//     res.end();
// })

// server.listen(3000, 'localhost', () => {

//     console.log(' Port is running in 3000');
// })

const { rmSync } = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    console.log('run request')
    res.setHeader('Content-Type', 'text/html')
    res.write(' Well come to learn JS OK')
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log(' Port is running in 3000')
    //no comment
})
