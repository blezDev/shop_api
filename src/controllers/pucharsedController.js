
const purchasedModel = require("../models/purchased");

const createPurchased = async (req,res)=>{
    const {pName, pCompany,pImage,pDescription,pCost,pCount,email} = req.body;

    const newItem = new purchasedModel({
        pName : pName,
        pCompany : pCompany,
        pImage:pImage,
        pDescription:pDescription,
        pCost:pCost,
        pCount:pCount,
        email :email
    });

    try{
        if(await purchasedModel.findOne({pName:pName,email:email}) != null){
            const _id = await purchasedModel.findOne({pName:pName,email:email});
           var item = await purchasedModel.findByIdAndUpdate({_id : _id._id},{$set : {pCount : (parseInt(_id.pCount)+1).toString()}});
           item
         
            res.status(201).json({message:"Object exists",item});
        }else
        {
           
            await newItem.save();
            res.status(200).json({message : "Item added"});
        }

      
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const getHistory = async (req,res)=>{
    const {email} = req.body;
    try{
        const items = await purchasedModel.find({email : email});
        res.status(200).json(items);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}



module.exports = {
    createPurchased,
    getHistory
    
}

