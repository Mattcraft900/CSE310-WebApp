const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to the Home page!");
    } else if (req.url === "/about") {
        res.end("this is the About page.");
    } else if (req.url === "/contact") {
        res.end("Contact us here.");
    } else  {
        res.statusCode = 404;
        res.end("404: page not found.");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});