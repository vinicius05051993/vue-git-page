const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

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
        let screenshotPath = path.join(__dirname, 'homepage.png');
        await driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFileSync(screenshotPath, image, 'base64');
            }
        );

    } finally {
        await driver.quit();
    }
})();
