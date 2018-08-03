const {BrowserWindow} =require('electron')
class HomeWindow{
    constructor(){
        this.createWindow();
    }
    createWindow(){
        const win=this.homeWindow=new BrowserWindow({
            width:800,
            height:500
        });
        this.homeWindow.loadURL(`file:${__dirname}/../render/home.html`);
        this.homeWindow.webContents.openDevTools()
    }
    show(){
        this.homeWindow&&this.homeWindow.show();
    }
    hide(){
        this.homeWindow&&this.homeWindow.hide();
    }
}
module.exports= HomeWindow;