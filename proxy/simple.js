// doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

const target = {
    message1: "hello",
    message2: "everyone",
};

const handler2 = {
    get(target, prop, receiver) {
        console.log("------------ call get -----------")
        console.log("target = ", target)
        console.log("prop = ", prop)
        console.log("receiver = ", receiver)
        console.log("arguments = ", arguments)

        if (prop == "message2")
            return "world";
            
        return Reflect.get(...arguments)
    },
    
    set(obj, prop, value) {
        console.log("------------ call set -----------")
        console.log("obj = ", obj)
        console.log("prop = ", prop)
        console.log("value = ", value)
    }
};
  
const proxy2 = new Proxy(target, handler2);

console.log(proxy2.message1); // world
console.log(proxy2.message2); // world

console.log("\n")

proxy2.message1 = "1"
proxy2.message1 = "2"