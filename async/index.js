// https://wcc723.github.io/development/2020/02/16/all-new-promise/

function sub_yes() {
  return new Promise((ok, not_ok) => {
      console.log("first");
      setTimeout(function () { console.log("third"); ok("return this if success"); }, 1000); // 必須執行 ok 或 not_ok 才會返回
      console.log("second");            // Promise 內部無法保證循序執行
  });
}

async function yes1() {
  let result = await sub_yes();                       // 正確: 先進去才 wait (sub_yes 的 setTimeout)
  console.log(result);
  console.log("forth");
}



/*
錯誤示範
*/

function sub_no() {
    console.log("first");     // 必須用 promise
}

async function no1() {
    await setTimeout(sub_no, 1000);               // 錯誤: 先 wait 才進去, 在 wait 過程中 second 就已經執行了
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

//yes1();
//no1();
embed();

