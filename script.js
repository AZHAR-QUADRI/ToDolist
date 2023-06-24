const express=require('express');
const bodyParser=require('body-parser');
const date=require(__dirname+"/date.js");
const app=express();

app.set('view engine','ejs');

let addListItems=["Complete EJS Module","Build a project","Share learnings on Socials"];
let work=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

app.get('/',(req,res)=>{
    
    let formattedDate=date.getDate();



    res.render("list",{listTitle:formattedDate , newTasks:addListItems});
    
})

app.post('/',(req,res)=>{
    item=req.body.Task;
    if(req.body.list==="Work List"){
        work.push(item);
        res.redirect('/work');
    }else{

        addListItems.push(item);
        res.redirect('/');
    }
})

app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work List" , newTasks:work});
})


app.get("/about",(req,res)=>{
    res.render("about");
})




app.listen(3000,()=>{
    console.log("server running at port 3000");
})