const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 50,
    frame: false,
    transparent: true,
    movable: false,
    resizable: false,
    minimizable: false,
    maximizable: false,
    alwaysOnTop: true,
    backgroundColor: '#80FFFFFF',
    // show: false,
  })
  win.removeMenu();
  win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow();
})