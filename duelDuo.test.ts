
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()

    expect(displayed).toBe(true)
})


test('Draw button generates choices in a div called "choices"', async() => {
    const drawButton = await driver.findElement(By.xpath('//*[@id = "draw"]')).click();
    const choicesSection = await driver.findElement(By.xpath('//section[1]/div')).getAttribute('id');

    expect(choicesSection).toBe("choices")
    await driver.sleep(2000)
})


test('"Add to duo" button generates a div called "with id player-duo"', async () => {
    const drawButton = await driver.findElement(By.xpath('//*[@id = "draw"]')).click();
    const choicesSection = await driver.findElement(By.xpath('//section[2]/section[1]/div')).getAttribute('id');
    expect(choicesSection).toBe("player-duo")
    await driver.sleep(2000)
})