module.exports = {
  // launch: {
  //   headless: process.env.CI === "true",
  //   ignoreDefaultArgs: ["--disable-extensions"],
  //   args: ["--no-sandbox"],
  //   executablePath: "chrome.exe"
  // },
  server: {
    command: "npm run dev",
    port: 9000,
    launchTimeout: 180000
  },
}

