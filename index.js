import express from "express";
import bodyParser from "body-parser";
import database from "mime-db";
const app = express();
const port = 3000;

var tasks = [];
var tasks2 = [];

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/action",(req,res)=>{
    const newTask = req.body["item"];
    tasks.push(newTask);
    res.redirect("/");
});

app.get('/',(req,res)=>{
    res.render("index.ejs",{
        task:tasks,
        date1:formattedDate
    });
});

app.post("/pwork",(req,res)=>{
    const newTask = req.body["item"];
    tasks2.push(newTask);
    res.redirect("/work");
});

app.get('/work',(req,res)=>{
    res.render("work.ejs",{
        task:tasks2,
        date1:formattedDate
    });
});

app.listen(port,()=>{
    console.log(`The server is running on ${port}`);
});


