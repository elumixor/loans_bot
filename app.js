const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hello world");
});


let port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Hello world");
});

