const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/submit', async (req, res) => {
    try {
        const { fullName, email, phone, message } = req.body;
        const newMessage = new Message({ fullName, email, phone, message });
        await newMessage.save();
        res.status(201).json({ message: "Message submitted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
