const express = require("express")
const app = express()
const multer = require("multer")
app.set("view engine","ejs")


const storage = multer.diskStorage({ 
    destination: function(req, file, cb){
        cb(null, "./uploads")        
    },

    filename: function(req, file, cb){
        cb(null, file.originalname,"-" + Date.now())
    }
})

const upload = multer({storage})

app.get("/", (req,res)=>{
    res.render("form")
})
                                         
app.post("/upload", upload.single("file"), (req,res)=>{ 
    res.send("Arquivo enviado com sucesso!!!")
})

app.listen(8000, ()=>{
    console.log("Servidor rodando na porta 8000...")
})