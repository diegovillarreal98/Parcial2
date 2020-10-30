var express = require ("express");

var app = express();

let path = require("path");
var PORT = 5000; 

app.use(express.urlencoded({extended :true}));
app.use(express.json());

app.get("/", function(req,res){
	 res.send("You are on the home page");
});

app.post("/post", function(req,res){
	var persona = req.body;
	 return res.send("Welcome " + persona.user);
});

app.delete("/delete", function(req,res){
	var ignore = req.body;
   return res.send({delete: true});
});

app.put("/put/:idName", function(req,res){
    return res.send("Task " + req.params.idName +  " has been updated");
});

app.listen(PORT, function(){
	console.log("APP listening on PORT" + PORT);
});