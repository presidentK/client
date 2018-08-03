const {app,BrowserWindow}=require('electron');
const HomeWindow=require('./home');
class DeskApp{
    constructor(){
        this.homeWindow=null;
        this.initApp()
    }
    createHomeWindow(){
        this.homeWindow=new HomeWindow();
    }
    initApp(){
        app.on('ready',()=>{
            this.createHomeWindow();
            this.homeWindow.show()
        })
        // 当全部窗口关闭时退出。
        app.on('window-all-closed', () => {
            // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
            // 否则绝大部分应用及其菜单栏会保持激活。
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })

        app.on('activate', () => {
            // 在macOS上，当单击dock图标并且没有其他窗口打开时，
            // 通常在应用程序中重新创建一个窗口。
            if (win === null) {

            }
        })
    }
}
new DeskApp()