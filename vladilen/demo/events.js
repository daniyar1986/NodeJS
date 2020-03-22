const EventEmiter = require("events");

// const emitter = new EventEmiter();

// emitter.on("anything", data => {
//     console.log("ON: anything", data);
// });

// emitter.emit("anything", { a: 1 });
// emitter.emit("anything", { b: 2 });

// setTimeout(() => {
//     emitter.emit("anything", { c: 3 });
// }, 5000);

class Dispatcher extends EventEmiter {
    subscribe(eventName, callBack) {
        console.log("[Subscribe ...]");
        this.on(eventName, callBack);
    }

    dispatch(eventName, data) {
        console.log("[Dispatching]");
        this.emit(eventName, data);
    }
}

const dis = new Dispatcher();

dis.subscribe("aa", callBack => {
    console.log("ON:aa", callBack);
});

dis.dispatch("aa", { aa: 22 });