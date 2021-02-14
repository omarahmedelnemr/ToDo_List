const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    minWidth: 360,
    maxWidth:360,
    width:360,
    height: 700,
    x:1000,
    y:10,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule :true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
var fs = require("fs");
read_file = function(path){
     return fs.readFileSync(path, 'utf8');
}

write_file = function(path, output){
    fs.writeFileSync(path, output);
}