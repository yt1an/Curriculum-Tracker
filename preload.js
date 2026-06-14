const { contextBridge, ipcRenderer } = require('electron');

// Exposes object to frontend javascript
contextBridge.exposeInMainWorld('api', {
    loadSubjects: () => ipcRenderer.invoke('get-subjects') // Invokes the listener in main.js
});