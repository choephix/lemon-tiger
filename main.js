const { app, BrowserWindow } = require('electron');

const isDev = process.env.NODE_ENV !== 'production';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(
    isDev ? 'http://localhost:5273' : `file://${path.join(__dirname, '../dist/index.html')}`
  );
  // win.loadURL('http://localhost:3000');

  // Hide the menu bar
  win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);
