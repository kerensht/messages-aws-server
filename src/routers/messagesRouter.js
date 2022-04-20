const express = require("express");

const Message = require("../models/messageModel");


const router = new express.Router();


router.get("/messages/getall", async (req, res) => {

    try {
        const allCMessages = await Message.find({});
        if (allCMessages) res.send(allCMessages);
        else res.send([]);
    }
    catch (err) {
        res.status(500).send(err);
    }
})



router.post("/messages/new", async (req, res) => {

    const message = new Message({
        ...req.body,
    });

    try {
        await message.save();
        res.send(message);
    } catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
});


module.exports = router;
