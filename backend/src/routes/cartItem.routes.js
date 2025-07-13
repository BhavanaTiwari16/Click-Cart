const express=require("express");
const authenticate = require("../middleware/authenticat.js");
const router=express.Router();

const cartItemController=require("../controllers/cartItem.Controller.js");

router.put("/:id",authenticate,cartItemController.updateCartItem);
router.delete("/:id",authenticate,cartItemController.removeCartItem);

module.exports=router;