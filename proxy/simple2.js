function sum(a, b) {
    return a + b;
}
  
const handler = {
    apply: function(target, thisArg, argumentsList) {
        console.log("target = ", target);
        console.log("thisArg = ", thisArg);
        console.log("argumentsList = ", argumentsList);
  
        return target(argumentsList[0], argumentsList[1]) * 10;
    }
};
  
const proxy1 = new Proxy(sum, handler);  
console.log(proxy1(1, 2)); // 30