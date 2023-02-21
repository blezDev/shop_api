const sItemModel = require("../models/sItem");

const createItem = async (req,res)=>{
    const {pName, pCompany,pImage,pDescription,pCost,pCount} = req.body;

    const newItem = new sItemModel({
        pName : pName,
        pCompany : pCompany,
        pImage:pImage,
        pDescription:pDescription,
        pCost:pCost,
        pCount:pCount
    });

    try{
        await newItem.save();
        res.status(200).json(newItem);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}


const updateItem = async (req,res) =>{
    const id = req.params.id;
    const {pName, pCompany,pImage,pDescription,pCost,pCount} = req.body;
    const newItem = {
        pName : pName,
        pCompany : pCompany,
        pImage:pImage,
        pDescription:pDescription,
        pCost:pCost,
        pCount:pCount
    };
    try{
        await newItem.findByIdAndUpdate(id,newItem,{new:true});
        res.status(200).json(newItem);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const deleteItem = async(req,res)=>{
    const id = req.params.id;
    try{
        const item = await sItemModel.findByIdAndDelete(id);
        res.status(200).json(item);

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"}); 
    }
}

const getItems = async (req,res)=>{
    try{
        const items = await sItemModel.find({});
        res.status(200).json(items);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const selectItem = async (req,res)=>{
    const {pName} = req.body;
    try{
        const item = await sItemModel.findOne({pName:pName});
        item;
        res.status(200).json(item);

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}
module.exports = {
    createItem,
    updateItem,
    deleteItem,
    getItems,
    selectItem
}
