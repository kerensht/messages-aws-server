const express = require("express");
const cors = require("cors");

const port = process.env.PORT;
const sequelize = require("./db/sequelize")

const messagesRouter = require("./routers/messagesRouter");


const app = express();

app.use(cors());
app.use(express.json());

app.use(messagesRouter);


sequelize.sync()
	.then(() => app.listen(port, () => console.log("server connected, port:", port)))
	.catch(err => console.log(err));










