const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    console.log('hello from main.js.createWindow')

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
    // win.webContents.openDevTools()

}

app.whenReady().then(() => {
    createWindow()
})
