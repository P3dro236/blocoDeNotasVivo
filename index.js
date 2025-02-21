const { app, BrowserWindow } = require('electron');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 450,
        height: 700,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('src/index.html');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});