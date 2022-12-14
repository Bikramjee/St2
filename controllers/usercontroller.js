const User=require("../models/schema");

const getData=async(req,res)=>{
    try {
        const {id}=req.query;
        if(!id)
        {
            console.log("Id not inserted");
            return res.status(400);
        }
        
        const itemfound=await User.findById(id);
        if(itemfound)
        {
            const{title,description,isCompleted}=itemfound;
            return res.status(200).json({
                title,description,isCompleted
            })
        }else{
            return res.status(422).json({
                message:"Item not found"
            })
        }
    } catch (error) {
        console.log("error occured");
        
        
    }
}




const getAllData=async(req,res)=>{
    try {
        const alldata=await User.find();
        if(alldata)
        {
            return res.status(200).json({
                alldata
            })
        }else{
            return res.status(422).json({
                message:"data not found"
            })
        }
    } catch (error) {
        console.log("error occured ");
       
    }
}




const addItem=async(req,res)=>{
    try {
        const {title,description}=req.body;

        const found=await User.findOne({title});
        if(found)
        {
            return res.status(422).json({
                message:"either title is already created or inavlid crendetials",
            })
        }

        const user=await User.create({title,description});
        await user.save();
        if(user)
        {
            const{_id,title,description,isCompleted,createdAt}=user;
            return res.status(200).json({
                message:"data added successfully",
                _id,title,description,isCompleted,createdAt
            })
        }else{
            return res.status(422).json({
                message:"data not added",
            })
        }
    } catch (error) {
        console.log("error occured ");
        
    }
}




const updateItem=async(req,res)=>{
    try {
        const {id}=req.query;
        if(!id)
        {
            console.log("Id not inserted");
            return res.status(400);
            
        }
        const data=req.body;
        var updateditem=await User.findByIdAndUpdate(id,data);
        await updateditem.save();
        updateditem=await User.findByIdAndUpdate(id,data);
        if(updateditem)
        {
            const{title,description,isCompleted}=updateditem;
            return res.status(200).json({
                message:"data updated successfully",
                title,description,isCompleted
            })
        }else{
            return res.status(422).json({
                message:"data not updated",
            })
        }
    } catch (error) {
        console.log("some error occured while updating the data");
        
    
    }
}


const deleteItem=async(req,res)=>{
    try {
        const {id}=req.query;
        if(!id)
        {
            console.log("Id not inserted");
            return res.status(400);
        }
        const deleteitem=await User.findByIdAndDelete(id);
        if(deleteitem)
        {
            const{title,description,isCompleted}=deleteitem;
            return res.status(200).json({
                message:"data deleted successfully",
                title,description,isCompleted
            })
        }else{
            return res.status(422).json({
                message:"data not deleted ,either data not found",
            })
        }
    } catch (error) {
        console.log("some error occured while deleting the data");
        
    }
}


module.exports={
    getData,
    getAllData,
    addItem,
    updateItem,
    deleteItem
};