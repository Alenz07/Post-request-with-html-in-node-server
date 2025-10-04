const http = require("http")
const express  = require("express")
const path = require("path")
app = express()
app.use(express.static("public"));

app.get("/products", (req,res)=>{
    res.sendFile(path.join(__dirname,"./views","view.html"))
})
app.use(express.json())
app.post("/products", (req,res)=>{
    console.log(req.body);  
    res.json(req.body.productName);
})

const server = http.createServer(app)
server.listen(2000)