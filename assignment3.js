//part1
// //1

//const http = require("node:http");
//const fs = require("fs");

//const server = http.createServer((req, res) => {
//  if (req.url === "/read" && req.method === "GET") {
//    const stream = fs.createReadStream("./big.txt");

//    stream.on("data", (chunk) => {
//      console.log(chunk.toString());
//    });

//    stream.on("end", () => {
//      res.end("Done reading file");
//    });
//  }
//});

//const port = 3000;
//server.listen(port, () => {
//  console.log("Server running on port", port);
//});


//2

//const http = require("node:http");
//const fs = require("fs");

//const server = http.createServer((req, res) => {
//  if (req.url === "/copy" && req.method === "GET") {
//    const readable = fs.createReadStream("./source.txt");
//    const writable = fs.createWriteStream("./dest.txt");

//    readable.on("data", (chunk) => {
//      writable.write(chunk);
//    });

//    readable.on("end", () => {
//      writable.end();
//      console.log("File copied using streams");
//      res.end("File copied using streams");
//    });
//  }
//});

//const port = 3000;
//server.listen(port, () => {
//  console.log("Server running on port", port);
//});


 //3


//part2
//1
/*const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "POST") {
    let body = "";

    req.on("data", chunk => body += chunk);

    req.on("end", () => {
      body = JSON.parse(body);

      fs.readFile("users.json", "utf8", (err, data) => {
        let users = JSON.parse(data);

        const index = users.findIndex(user => user.email === body.email);

        if (index !== -1) {
          res.writeHead(400, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ message: "email already exists" }));
        }

        users.push(body);

        fs.writeFile("users.json", JSON.stringify(users), () => {
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "user added successufly." }));
        });
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});
const port = 3000;
server.listen(port, () => {
 console.log("Server running on port", port);
});

//2

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/user/") && req.method === "PATCH") {
    let body = "";
    const id = req.url.split("/")[2];

    req.on("data", chunk => body += chunk);

    req.on("end", () => {
      body = JSON.parse(body);

      fs.readFile("users.json", "utf8", (err, data) => {
        let users = JSON.parse(data);

        const userIndex = users.findIndex(user => user.id == id);

        if (userIndex === -1) {
          res.writeHead(404, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ message: "user id not found." }));
        }

        for (let key in body) {
          users[userIndex][key] = body[key];
        }

        fs.writeFile("users.json", JSON.stringify(users), () => {
          const updatedField = Object.keys(body)[0]; 
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: `user ${updatedField} updated successufly.` }));
        });
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

const port = 3000;
server.listen(port, () => {
 console.log("Server running on port", port);
});


//3
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/user/") && req.method === "DELETE") {
    const id = req.url.split("/")[2];

    fs.readFile("users.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Error reading file" }));
      }

      let users = JSON.parse(data);
      const userExists = users.some(user => user.id == id);

      if (!userExists) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "user id not found." }));
      }

      users = users.filter(user => user.id != id);
      fs.writeFile("users.json", JSON.stringify(users), () => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "user deleted successufly." }));
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

const port = 3000;
server.listen(port, () => {
 console.log("Server running on port", port);
});
   

//4

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if ( req.url === "/users" && req.method === "GET") {
    const stream = fs.createReadStream("users.json", "utf8");

    let data = "";
    stream.on("data", (chunk) => {
      data += chunk;
    });

    stream.on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });

    stream.on("error", () => {
      res.writeHead(500);
      res.end("Error reading file");
    });
  }
});
const port = 3000;
server.listen(port, () => {
 console.log("Server running on port", port);
});

//5

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/user/") && req.method === "GET") {
    const id = req.url.split("/")[2];

    fs.readFile("users.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Error reading file" }));
      }

      let users = JSON.parse(data);

      const userIndex = users.findIndex(user => user.id == id);

      if (userIndex === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "user not found." }));
      }

      const user = users[userIndex];

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify([user]));
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

const port = 3000;
server.listen(port, () => {
  console.log("Server running on port", port);
});

//part 3

//1
//-Allows Node.js to handle non-blocking I/O on a single thread
//-Continuously checks the call stack and callback queue to execute tasks when the stack is empty

//2
//-Libuv is a C library that Node.js uses to provide asynchronous I/O.
//-Role in Node.js:
//  1 Handles event loop operations.
//  2 Provides non-blocking I/O for file systems, network, timers, and more.
//  3 Enables Node.js to perform concurrent operations on a single thread.

//3
//1 The task is offloaded to the background (thread pool or OS).
//2 Node.js does not block the main thread
//3 Once the task completes, its callback is placed in the callback queue.
//4 The event loop picks it up when the call stack is empty and executes it

//4
//-Stack → code running right now
//-Queue → code waiting after async tasks
//-Event Loop → manages stack and queue, allowing async operations to run without blocking

//5
//Thread pool = background workers for expensive async tasks. You can increase its size with UV_THREADPOOL_SIZE.


//6
//-Blocking code: Runs synchronously on the main thread. The event loop waits until it finishes before moving on. Example: fs.readFileSync()

//-Non-Blocking code: Runs asynchronously, letting the main thread continue while waiting for the operation to complete. Example: fs.readFile()

//-How Node.js handles it:
//1 Non-blocking operations are sent to the thread pool (or OS) via Libuv.
//2 The event loop keeps running other code while waiting.
//3 When the async task finishes, its callback is added to the event queue.
//4 The event loop executes the callback when the call stack is empty.
*/