const net = require("net");
const { IP, PORT } = require("./constants.js");
const { setupInput } = require("./input.js")


// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
        host : IP,
        port : PORT,
    });
// Interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on("connect", () => {
        conn.write("Name: JSE");
    })
    conn.on("connect", () => {
        console.log("Successfully connected to game server");
    })
    return conn;
};

// setup interface to handle user input from stdin





//console.log("Connecting....");

setupInput(connect());