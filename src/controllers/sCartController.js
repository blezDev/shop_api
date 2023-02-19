
const sItemCartModel = require("../models/sItemCart");

const createItemCart = async (req,res)=>{
    const {pName, pCompany,pImage,pDescription,pCost,pCount,email} = req.body;

    const newItem = new sItemCartModel({
        pName : pName,
        pCompany : pCompany,
        pImage:pImage,
        pDescription:pDescription,
        pCost:pCost,
        pCount:pCount,
        email :email
    });

    try{
        if(await sItemCartModel.findOne({pName:pName,email:email}) != null){
            const _id = await sItemCartModel.findOne({pName:pName,email:email});
           var item = await sItemCartModel.findByIdAndUpdate({_id : _id._id},{$set : {pCount : (parseInt(_id.pCount)+1).toString()}});
           item
         
            res.status(200).json({message:"Object exists",item});
        }else
        {
           
            await newItem.save();
            res.status(200).json(newItem);
        }

      
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const updateItemCart = async (req,res) =>{
   
    const {pName, pCompany,pImage,pDescription,pCost,pCount,email,_id} = req.body;
    const newItem = {
        pName : pName,
        pCompany : pCompany,
        pImage:pImage,
        pDescription:pDescription,
        pCost:pCost,
        pCount:pCount,
        email : email
    };
    try{
        await sItemCartModel.findByIdAndUpdate({_id},{$set : {pCount : pCount}});
       // await newItem.findByIdAndUpdate(_id,newItem,{new:true});
        res.status(200).json({message : "Value is updated"});
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const deleteItemCart = async(req,res)=>{
    const {_id} = req.body;
    try{
        const item = await sItemCartModel.findByIdAndDelete(_id);
        item
        res.status(200).json({message : "Item deleted :" + _id});

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"}); 
    }
}

const getCartItems = async (req,res)=>{
    const {email} = req.body;
    try{
        const items = await sItemCartModel.find({email : email});
        res.status(200).json(items);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const deleteAllCartItems = async (req,res)=>{
    const {email} = req.body;
    try{

        const status = await sItemCartModel.deleteMany({email : email})
        status
        res.status(200).json({message :"All items are deleted."});

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {
    createItemCart,
    updateItemCart,
    deleteItemCart,
    getCartItems,
    deleteAllCartItems
}

