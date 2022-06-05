const express = require("express");

const Message = require("../models/messageModel");


const router = new express.Router();


router.get("/messages/getall", async (req, res) => {

    try {
        const messages = await Message.findAll();
        if (messages) res.send(messages);
        else res.send([]);
    }
    catch (err) {
        res.status(500).send(err);
    }
})



router.post("/messages/new", async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.send(message);
    } catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
});


module.exports = router;
