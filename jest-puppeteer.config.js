module.exports = {
  // launch: {
  //   headless: true,
  //   ignoreDefaultArgs: ["--disable-extensions"],
  //   // args: ["--no-sandbox"],
  //   // executablePath: "chrome.exe"
  // },
  server: {
    command: 'node server.js',
    protocol: 'http',
    port: 8888,
    launchTimeout: 180000,
    debug: true,
  },
}

