
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname,"public/index.html"));
});

app.get("/clienti",(req,res)=>{
  res.sendFile(path.join(__dirname,"public/clienti.html"));
});

app.post("/import-clienti", upload.single("file"), (req,res)=>{
  res.redirect("/clienti");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log("CRM online"));
