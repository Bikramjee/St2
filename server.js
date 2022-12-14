const express=require("express");
const app=express();
require("./db/connection");
const bodyParser=require("body-parser");
const cors=require("cors");

app.use(bodyParser.json());
app.use(require("./Routes/usersroutes"));
app.use(cors());

app.listen(5000,()=>{
    console.log("server is started at port no. 5000");
})

