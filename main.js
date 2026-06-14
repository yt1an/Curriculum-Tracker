import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import fs from 'fs/promises'
import { fileURLToPath } from 'url';

//Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow(){
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // Links preload file securely
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    window.loadFile('index.html');
}


//Backend Listener: Waits for the frontend to ask for the subjects
ipcMain.handle('get-subjects', async () => {
    try {
        const rawData = await fs.readFile('curriculum.json', 'utf-8');
        return JSON.parse(rawData); // Sends the array back to the frontend
    } catch (error) {
        console.error("Error reading curriculum file: ", error);
        return [];
    }
});

app.whenReady().then(createWindow);