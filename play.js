const net = require('net');

// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
        host : 'localhost',
        port : 50541,
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

console.log("Connecting....");
connect();

module.exports = connect;