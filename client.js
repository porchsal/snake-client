const connect = require("./play");

connect.on("connect", () => {
    connect.write("Successfully connected to game server");
})

connect();