const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const remote = require('electron').remote;

// init window
let win;

function createWindow(){
    // Creating window
    win = new BrowserWindow({
        minWidth:800,
        minHeight:600,
        icon:__dirname+'img/electra.ico',
        frame: false,
        titleBarStyle: 'hidden',
        backgroundColor: '#111',
        show: false,
        resizable:true
    });

    // load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol:'file:',
        slashes:true
    }));

    // App startup ease
    // Once the window is ready to show, trigger the show() function;
    win.once('ready-to-show', () => {
        win.show()
    });

    win.on('closed', () => {
        win = null;
    });

    // Open devtools
    // win.webContents.openDevTools();
}

// Run creat window function
app.on('ready', createWindow);


// Quit when all windows are closed

app.on('window-all-closed', () => {
    if(process.platform != 'darwin'){
        app.quit();
    }
});
