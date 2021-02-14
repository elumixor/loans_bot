const express = require("express");
const index = express();

index.get("/", (request, response) => {
    response.send("Hello world");
});


let port = process.env.port || 3000;
index.listen(port, () => {
    console.log("Hello world");
});

