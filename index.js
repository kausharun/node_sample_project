const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yum yum dum dum')
})

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');