function foo1() {
    console.log("call foo1");
}


function example1() {
	setTimeout(foo1, 1000);
}




function foo2(arg1) {
    console.log(`call foo2: ${arg1}`);
}

function example2() {
	setTimeout(function() {
        	     foo2("a")
	           }, 1000);
        
	// setTimeout(foo2("a"), 1000)  # Error: Callback must be a function
}



function example3() {
	console.log("1");
	setTimeout(function() {console.log("end");}, 1000); // setTimeout 是非同步函式，所以會放到最後才執行
	console.log("3");
}



function foo4() {
	return new Promise(resolve => setTimeout(resolve, 1000));
}

async function example4() {
	console.log("1");
	await foo4();              // sleep 1s
	console.log("2");
}

//example1();
//example2();
//example3();
example4();
