// // var events = require('events');
// // var eventEmitter = new events.EventEmitter();
// // function ringbell(){
// //     console.log('ring ring ring');

// // }
// // eventEmitter.on('doorOpen', ringbell);//register for binding
// // eventEmitter.emit('doorOpen');//register for firing or

// //*********arrow function direct argument passing******** */

// const EventEmitter = require('events');
// var emitter = new EventEmitter();

// //regiser a listner and defining the callback
// emitter.on("myevent", (arg1,arg2) =>{
//     console.log("id is" +arg1+ "and name is" +arg2)
// });


// //raise an event and passing parameters
// emitter.emit('myevent',1,'Rahul');

