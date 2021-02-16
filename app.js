const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hello world");
});


let port = process.env.port || 8081;
app.listen(port, () => {
    console.log("Hello world. Port = " + port);
});

