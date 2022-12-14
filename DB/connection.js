const mongoose=require("mongoose");
const url="mongodb+srv://Bikram:TPTIDJLWbtE25IYV@cluster0.ostjncz.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url,{

}).then(()=>{
    console.log("mongodb connection success");
}).catch(()=>{
    console.log("mongodb connection fail");
})