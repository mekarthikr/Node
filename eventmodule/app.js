const EventEmitter = require('events');
const events=require('events') //event emitter
const util = require('util')

// const myEmitter=new events.EventEmitter();

// myEmitter.on('someEvent',function(msg){
//     console.log(msg)
// })

// myEmitter.emit('someEvent','This Event is Emitted')


const person=function(name)
{
    this.name=name;
}


util.inherits(person,EventEmitter);

let tangiro=new person('tangiro')
let enosuke=new person('enosuke')
let persons=[tangiro,enosuke]

persons.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name+" says "+mssg)
    })
})

tangiro.emit('speak','Hi Enosuke');
enosuke.emit('speak', 'Hi Tangiro')


