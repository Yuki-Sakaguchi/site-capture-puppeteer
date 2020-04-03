/**
 * jsonに定義されたサイトのキャプチャを撮影する 
 */
const puppeteer = require('puppeteer')
const fs = require('fs')

const json = JSON.parse(fs.readFileSync('./target.json'))

json.forEach(async ({ name, url, width, height, auth, waitTime }) => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  page.setViewport({ width, height })

  if (auth) await page.authenticate(auth)
  await page.goto(url, { waitUntil: 'load' })
  if (waitTime) await page.waitFor(waitTime)
  await page.screenshot({ path: `./capture/${name}.png`, fullPage: false })

  console.log(`save screenshot: ${url}`)

  await browser.close()
})