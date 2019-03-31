// this file handle all the websocket stuff
/*
   TODO: add a place where people can type.
   TODO: add place where incoming messages are shown
   */
var ws = new WebSocket("wss://94.229.65.212/ws");

ws.onopen = function () {
    ws.send("client connected")
};

ws.onmessage = function (e) {
    console.log(e.data)
    ws.send(e.data)
};
