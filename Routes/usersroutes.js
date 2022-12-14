const router=require("express").Router();
const{getData,getAllData,addItem,updateItem,deleteItem}=require("../controllers/usercontroller");

router.get("/getall",getAllData);
router.get("/getone",getData);
router.post("/create",addItem);
router.patch("/update",updateItem);
router.delete("/delete",deleteItem);

module.exports=router;