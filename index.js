let express = require("express");
let path = require("path");

let app = express();
app.use(express.json());
app.set("views",path.join(__dirname,"views"));
app.set("view engine", "pug");


const users = [
    {
        name:"vijay",
    },
    {
        name:"abhi",
    },
    {
        name:"arun",
    },
    

];

app.get("/", function(req,res){
    
   let pathString =path.join(__dirname,"index.pug");
   res.render(pathString,{
       message: req.query.message || "hey"
   });
    
   
});

app.get("/users", function(req,res){
    res.json(users);
});
app.post('/users',function(req,res){
   
    users.push({
        name: req.body.name,
    });
    res.json(users);
});

app.listen(3000);