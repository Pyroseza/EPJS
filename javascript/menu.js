// this creates the client menu
(function () {
    // Retrieve remote BrowserWindow
    const {BrowserWindow} = require('electron').remote

    // keep track of the dev status
    let dev = false

    function init() {
        // Minimize task
        document.getElementById("dev").addEventListener("click", (e) => {
            var window = BrowserWindow.getFocusedWindow();
            if (dev === false) {
                window.webContents.openDevTools()
                dev = true
            }else{
                window.webContents.closeDevTools()
                dev = false
            }
            console.log("dev tools:", dev)
        })
        document.getElementById("min-btn").addEventListener("click", (e) => {
            var window = BrowserWindow.getFocusedWindow();
            window.minimize();
        });

        // Maximize window
        document.getElementById("max-btn").addEventListener("click", (e) => {
            var window = BrowserWindow.getFocusedWindow();
            if (window.isMaximized()) {
                window.unmaximize();
            } else {
                window.maximize();
            }
        });

        // Close app
        document.getElementById("close-btn").addEventListener("click", (e) => {
            var window = BrowserWindow.getFocusedWindow();
            window.close();
        });
    };

    document.onreadystatechange = () => {
        if (document.readyState == "complete") {
            init();
        }
    };
})();