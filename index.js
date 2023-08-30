import express from "express";
import bodyParser from "body-parser";
const port=3000;

const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


let formData = [];
let workData=[]
app.get("/",(req,res)=>{
    res.render("index.ejs",{ formData });
});
app.post('/submit', (req, res) => {
    const inputFieldData = req.body["newItem"];
    formData.push({ inputField: inputFieldData });
    res.redirect('/');
  });
  app.get("/work", (req,res)=>{
    res.render("work.ejs",{workData});
  });
  app.post('/subwork', (req, res) => {
    const inputFieldDatawork = req.body["newItem"];
    workData.push({ inputFieldw: inputFieldDatawork });
    res.redirect('/work');
  });

app.listen(port,()=>{
    console.log(`server is runing on ${port} port`);
});
