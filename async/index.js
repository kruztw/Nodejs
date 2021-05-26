function sub_yes() {
  return new Promise((ok, not_ok) => {
      console.log("first");
      setTimeout(function () { console.log("third"); ok("return this if success"); }, 1000); // 不能不執行 resolve
      console.log("second");            // Promise 內部無法保證循序執行
  });
}

async function yes1() {
  let result = await sub_yes();                       // 正確: 先進去才 wait
  console.log(result);
  //await setTimeout(sub_yes, 1000);                  // 錯誤: 先 wait 才進去, 在 wait 過程中 second 就已經執行了
  console.log("forth");
}



/*
錯誤示範
*/

function sub_no() {
    console.log("first");     // 必須用 promise
}

async function no1() {
    await setTimeout(sub_no, 1000);
    console.log("second");
}

yes1();
//no1();

