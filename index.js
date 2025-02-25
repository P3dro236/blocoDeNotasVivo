const { app, BrowserWindow } = require('electron');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 570,
        height: 807,
        resizable: false, // Torna a janela não redimensionável
        minWidth: 570, // Define a largura mínima
        minHeight: 807, // Define a altura mínima
        maxWidth: 570, // Define a largura máxima
        maxHeight: 807, // Define a altura máxima
        webPreferences: {
            nodeIntegration: true
        },
        icon: 'src/icons/blocoDeNotasVivoIcon.ico'
    });

    mainWindow.loadFile('src/index.html');
    mainWindow.setMenu(null)
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