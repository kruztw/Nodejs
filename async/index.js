// https://wcc723.github.io/development/2020/02/16/all-new-promise/

function foo11() {
  return new Promise((resolve, reject) => {
      console.log("first");
      setTimeout(function () { console.log("third"); resolve("return this if success"); }, 1000); // 必須執行 resolve 或 reject 才會返回
      console.log("second");            // Promise 內部無法保證循序執行
  });
}

async function foo1() {
  let result = await foo11();                       // 正確: 先進去才 wait (foo11 的 setTimeout)
  console.log(result);
  console.log("forth");
}

/* async awiat in promise */
async function foo222() {
    return new Promise((resolve, reject) => {
        setTimeout(function () { console.log("second"); resolve("return this if success"); }, 1000);
    });
}

function foo22() {
    return new Promise(async (resolve, reject) => {
        console.log("first");
        await foo222();
        console.log("third");
        resolve("return this if success");
  });
}

async function foo2() {
  let result = await foo22();                       // 正確: 先進去才 wait
  console.log(result);
  console.log("forth");
}

/*
錯誤示範
*/

function foo33() {
    console.log("first");     // 必須用 promise
}

async function foo3() {
    await setTimeout(foo33, 1000);                  // 錯誤: 先 wait 才進去, 在 wait 過程中 second 就已經執行了
    console.log("second");
}



async function embed() {
    await console.log('a');
    await Promise.all([
		setTimeout(function () {console.log('b')}, 1000),
		setTimeout(function () {console.log('c')}, 2000),
	  ]);

    await console.log('d');
}

//foo1();
//foo2();
//foo3();
embed();

