import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.MONGODB_DATABASE_URL;

app.get(
	"/",
	(req, res) => res.send("Hello World")
);

mongoose.connect(DATABASE_URL)
	.then(() => console.log(`Database connected successfully`))
	.catch(error => console.error(error)
);

app.listen(
	PORT,
	() => console.log(`Server listening on port ${PORT}`)
);