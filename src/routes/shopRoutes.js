const express = require("express");
const { createItem, updateItem,deleteItem,getItems } = require("../controllers/shopItemsController.js");
const {  createItemCart,updateItemCart,deleteItemCart,getCartItems,deleteAllCartItems } = require("../controllers/sCartController.js");

const auth = require("../middleware/auth.js");
const shopRouter = express.Router();

shopRouter.post("/cartItems",auth,getCartItems);
shopRouter.post("/createCart",auth,createItemCart);
shopRouter.post("/deleteCartItem",auth,deleteItemCart);
shopRouter.post("/deleteAllCart",auth,deleteAllCartItems);
shopRouter.post("/updateCart",auth,updateItemCart);


shopRouter.get("/items",getItems);
shopRouter.post("/createItem",auth,createItem);


module.exports = shopRouter;
