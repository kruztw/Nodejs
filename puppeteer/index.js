// https://wcc723.github.io/development/2020/03/01/puppeteer/

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();




const { width, height } = require("screenz");

(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      '/usr/bin/google-chrome',
    headless: false,
    ignoreHTTPSErrors: true,
    args: [`--window-size=${width},${height}`]
  });

  const page = await browser.newPage();
  await page.waitFor(1000);
  await page.goto('https://www.google.com.tw');
  await page.type('input[title="Google 搜尋"]', 'flex'); // Google 搜尋特定項目
  await (await page.$('input[title="Google 搜尋"]')).press('Enter'); // 特定元素上按下 Enter
  await page.waitFor(1000); // 等待一秒
  await page.waitForSelector('#gsr'); // 確定網頁的元素出現
  await page.click( // 點擊網址中包含以下的連結...
    'a[href*="https://wcc723.github.io"]');

  // 接下來也可插入 await browser.close(); 關閉瀏覽器
})();
