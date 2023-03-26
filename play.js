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

// setup interface to handle user input from stdin

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };

const handleUserInput = function(){
    if (key === '\u0003') {
        process.exit();
      }
};


console.log("Connecting....");
connect();

module.exports = connect;