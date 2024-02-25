const express = require("express")
const dotenv = require("dotenv")
const http = require("http");
const socket = require("socket.io")
const connectToDB = require("./config/db");

const app = express();
const server = http.createServer(app);
const io = socket(server);

dotenv.config({path:"./config/config.env"});

connectToDB();

const PORT = process.env.PORT || 8000

app.use("/*",(req,res,next)=>{
    res.send("welcome guyzs")
    next()
})

io.on("connection",(socket)=>{
    console.log("socket.io",socket);
})

server.listen(PORT,()=>{
    console.log(`Server Listen at PORT : ${PORT}`)
})