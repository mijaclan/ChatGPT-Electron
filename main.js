const { app, BrowserWindow} = require('electron');
let mainWindow
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false // 自定义边框
    })
    // mainWindow.webContents.openDevTools() // 打开窗口调试
    // mainWindow.loadURL(`file://${__dirname}/build/index.html`)  //窗口主文件地址
    mainWindow.loadURL('http://localhost:3000/');
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});