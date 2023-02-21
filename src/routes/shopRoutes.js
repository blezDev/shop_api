const express = require("express");
const { createItem, updateItem,deleteItem,getItems, selectItem } = require("../controllers/shopItemsController.js");
const {  createItemCart,updateItemCart,deleteItemCart,getCartItems,deleteAllCartItems } = require("../controllers/sCartController.js");

const auth = require("../middleware/auth.js");
const shopRouter = express.Router();

shopRouter.post("/cartItems",getCartItems);
shopRouter.post("/createCart",createItemCart);
shopRouter.post("/deleteCartItem",deleteItemCart);
shopRouter.post("/deleteAllCart",deleteAllCartItems);
shopRouter.post("/updateCart",updateItemCart);
shopRouter.post("/selectItem",selectItem);


shopRouter.get("/items",getItems);
shopRouter.post("/createItem",createItem);


module.exports = shopRouter;
