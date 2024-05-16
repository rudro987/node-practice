const EventEmitter = require('events');

const myEmitter = new EventEmitter();

//listener

myEmitter.on('goodDay', ()=> {
    console.log('Good day to you');
    
});

myEmitter.on('goodDay', (gift) => {
    console.log(`I will send a ${gift}`);
    
})

myEmitter.emit('goodDay', 'Bike')
