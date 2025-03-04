const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 300,
    frame: true,         // Remove the default window frame for a sleek widget look
    transparent: true,    // Enable transparency for that floating widget feel
    alwaysOnTop: false,    // Keep your progress visible at all times
    resizable: false,     // Prevent users from resizing the window
    movable: true,        // Allow users to move the window around
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  // Point to the React development server during development
  win.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});