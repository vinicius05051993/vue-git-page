import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import path from 'path';
import fs from 'fs';

(async function example() {
    // Configuração para rodar o Chrome headless
    let options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--disable-gpu');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://vinicius05051993.github.io/vue-catalog/'); // Ajuste a URL conforme necessário

        // Adicione seus testes aqui
        let title = await driver.getTitle();
        console.log(title);

        // Captura de tela da página inicial
        let screenshotPath = path.join(process.cwd(), 'homepage.png');
        await driver.takeScreenshot().then(
            function(image) {
                fs.writeFileSync(screenshotPath, image, 'base64');
            }
        );

    } finally {
        await driver.quit();
    }
})();
