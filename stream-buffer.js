const http = require('http');
const fs = require('fs');

// creating a server using node js

const server = http.createServer();

// server listener

server.on('request', (req, res) => {
    if(req.url === '/read-file' && req.method === 'GET'){
        //streaming file reading

        // const readableStream = fs.createReadStream(__dirname + '/texts/read.txt');
        const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt');
        readableStream.on('data', (buffer) => {
            res.write(buffer)
        });
        readableStream.on('end', () => {
            res.end("Hello from Tanvir's server")
        })
    }

    
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
    
})