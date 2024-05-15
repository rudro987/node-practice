const fs = require('fs');

//reading a file text

const readText = fs.readFileSync('./texts/read.txt', 'utf-8');


//writing a file text

const writeText = fs.writeFileSync('./texts/write.txt', readText + 'This is my written text');


//reading text asynchronously

const readText2 = fs.readFile('./texts/read.txt', 'utf-8',  (err, data) => {
    if(err){
        throw Error('Error reading text')
    }
    console.log(data);

    //writing text asynchronously

    fs.writeFile('./texts/write2.txt', data, 'utf-8', (err) => {
        if(err){
            throw Error('Error writing data')
        }
    })
    
});

console.log('testing asynchronous');



