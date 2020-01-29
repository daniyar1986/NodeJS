let events = require('events');
let util = require('util');

let myEmit = new events.EventEmitter();

myEmit.on("some_event", function (text) {
    console.log(text);
});

myEmit.emit("some_event",'Event hadler');


let Cars = function (model) {
    this.model = model;
};

util.inherits(Cars, events.EventEmitter);

let bmw = new Cars("BMV");
let audi = new Cars("Audi");
let volvo = new Cars("Volvo");

 let cars = [bmw,audi,volvo];
 cars.forEach(function (car) {
    car.on('speed',function (text) {
        console.log(car.model+" speed is - "+text);
    });
 });

 bmw.emit('speed',120);
 audi.emit('speed',180);
 volvo.emit('speed',250);