// config-handler 會讀取 package.json 並跟當下的 config 做合併
// 然而可控的 package.json 可做到 prototype pollution
// 參考: https://blog.bi0s.in/2021/08/15/Web/inCTFi21-JsonAnalyser/

const express = require('express');
const app = express();
port = 8888

app.get('/', function (req, res) {
    const config = require('config-handler')();

    // 不應該有 test 變數, 但因為 package.json 存在 prototype pollution
    console.log(test)
    console.log(config)
    res.send(config)
});

var server= app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
