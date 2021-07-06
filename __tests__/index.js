// const path = require('path')

describe('Remember Scroll', () => {

  beforeAll(async () => {
    await page.goto('http://localhost:8888/__tests__/index.html?id=1')

    await page.setViewport({
      width: 1080,
      height: 800
    });


    // scroll to any scrollTop
    await page.evaluate(() => {
      window.scrollTo(0, 1080);
    });

    // 因为有节流异步去存储，所以等1秒再继续往下走
    await page.waitForTimeout(200)

    // 关闭页面
    await page.close()

    // 重新打开之前的页面
    page = await browser.newPage();
    await page.goto('http://localhost:8888/__tests__/index.html?id=1');
  })



  it('should be titled remember scroll', async () => {
    await expect(page.title()).resolves.toMatch('remember-scroll');
  })

  it('page should contained 100', async () => {
    await expect(page).toMatch('100');
  })


  it(`page 1 should scroll to ${1080}`, async () => {

    const top = await page.evaluate(() => document.body.scrollTop);
    // console.log('top:====', top)
    await expect(top).toBe(1080);
  })



  it(`page 2 should not scroll to 1080`, async () => {
    // 关闭页面
    await page.close()

    // 重新打开之前的页面
    page = await browser.newPage();
    await page.goto('http://localhost:8888/__tests__/index.html?id=2');

    const top = await page.evaluate(() => document.body.scrollTop);
    // console.log('top:====', top)
    await expect(top).toBe(0);
  })


  it(`page 1 should scroll to 1080 when open again`, async () => {
    // 关闭页面
    await page.close()

    // 重新打开之前的页面
    page = await browser.newPage();
    await page.goto('http://localhost:8888/__tests__/index.html?id=1');

    await page.waitForTimeout(200)

    const top = await page.evaluate(() => document.body.scrollTop);

    await expect(top).toBe(1080);
  })

})