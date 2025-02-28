const { defineConfig } = require("cypress");

const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('task', {
                writeJsonFile({ filePath, jsonData }) {
                    const absolutePath = path.join(config.projectRoot, filePath);
                    fs.writeFileSync(absolutePath, JSON.stringify(jsonData));
                    return null;
                }
            });
        },
        baseUrl: "https://www.saucedemo.com/",
    },
});