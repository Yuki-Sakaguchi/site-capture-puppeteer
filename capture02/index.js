/**
 * jsonに定義されたサイトのキャプチャを撮影する 
 */
const puppeteer = require('puppeteer')
const fs = require('fs')

const url = fs.readFileSync('./target.txt')
const json = JSON.parse(fs.readFileSync('./config.json'))

async function main () {
  url.toString().split(`\n`).forEach(async (url, index) => {
    await json.forEach(async ({ type, width, height }) => {
      const browser = await puppeteer.launch({ headless: true})
      const page = await browser.newPage()
      page.setViewport({ width, height })
      await page.goto(url, { waitUtil: 'load' })
      await page.waitFor(500)
      await page.screenshot({ path: `./capture/${('000' + index).slice(-3)}_${type}.png`, fullPage: true })
      console.log(`save screenshot: ${url}`)
      await browser.close()
    })
  })
}

main()