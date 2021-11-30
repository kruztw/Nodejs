// 參考: https://www.npmjs.com/package/dotenv
// dotenv 會將 .env 的內容存到 process.env


require("dotenv").config();
const name = process.env.name ? process.env.name : "nobody";
console.log(name);
