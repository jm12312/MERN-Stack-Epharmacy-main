const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// ADD PRODUCT TO CART
router.post("/add-to-cart", async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({
                userId,
                oc: [{ pid: productId, quantity }]
            });
        } else {
            const index = cart.oc.findIndex(item => item.pid.toString() === productId);
            if (index !== -1) {
                cart.oc[index].quantity += quantity;
            } else {
                cart.oc.push({ pid: productId, quantity });
            }
        }
        await cart.save();

        res.status(200).json({ message: "Product added to cart successfully", cart });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/getcart/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await Cart.findOne({ userId }).populate('oc.pid');
        res.status(200).json({ cart });
    } catch (error) {
        console.error("Error fetching cart details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// DELETE PRODUCT FROM CART
router.delete("/delete/:userId/:productId", async (req, res) => {
    try {
        const { userId, productId } = req.params;
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        const index = cart.oc.findIndex(item => item.pid.toString() === productId);
        if (index !== -1) {
            cart.oc.splice(index, 1);
            await cart.save();
            return res.status(200).json({ message: "Product deleted from cart successfully", cart });
        } else {
            return res.status(404).json({ message: "Product not found in cart" });
        }
    } catch (error) {
        console.error("Error deleting product from cart:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// CLEAR CART
router.delete("/clear/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        cart.oc = []; // Empty the cart
        await cart.save();
        return res.status(200).json({ message: "Cart cleared successfully" });
    } catch (error) {
        console.error("Error clearing cart:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
