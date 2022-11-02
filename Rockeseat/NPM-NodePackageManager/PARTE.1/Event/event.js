//criação de event 

const {EventEmitter} = require('events')
const ev = new EventEmitter()

//ouvir event

ev.on('saySomething', () => {
    console.log('eu consigo te ouvir')
} )    

//evento emitr 
ev.emit('saySomething' , "CAio")
ev.emit('saySomething' , "ana")

