const fetch = require("node-fetch");

async function foo() {
    let resp = await fetch('http://www.example.com',{
        method:'POST', 
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
        body:new URLSearchParams({
          region: 'eu',
        }),
     }).then(e=>e.text());

    await console.log(resp);
}

foo();
