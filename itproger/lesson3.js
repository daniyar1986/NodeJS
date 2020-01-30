let counter = require('./array');

function test() {
    console.log("Hi")
}

test();

let printSomething = function () {
    console.log("Simple text")
};

function call(func) {
    func();
}

printSomething();

call(printSomething);


console.log(counter( [1,2,3,5]));