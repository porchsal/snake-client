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
//        conn.write("Move: Up");
    })
    conn.on("connect", () => {
        console.log("Successfully connected to game server");
        // conn.write("Move: Up");
        // setInterval(() => {
        //     conn.write("Move: Up");
        // }, 50)
    })
    conn.on("data", () => {
        
    })
    return conn;
};

console.log("Connecting....");
connect();

module.exports = connect;