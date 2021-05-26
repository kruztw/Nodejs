function foo1() {
    console.log("call foo1");
}

function foo2(arg1) {
    console.log(`call foo2: ${arg1}`);
}

setTimeout(foo1, 1000);

setTimeout(function() {
             foo2("a")
           }, 1000);

/*
setTimeout(foo2("a"), 1000)  # Error: Callback must be a function
*/
