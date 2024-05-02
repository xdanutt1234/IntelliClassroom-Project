const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ipcRenderer', {
  sendSync: (channel, args) => ipcRenderer.sendSync(channel, args),
  invoke: (channel, args) => ipcRenderer.invoke(channel, args),
  on: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args)),
  once: (channel, func) => ipcRenderer.once(channel, (event, ...args) => func(...args)),
});