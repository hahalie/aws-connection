const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to the homepage!");
});

const port = process.env.port || 5000;
app.listen(port, () => {
	console.log(`App is running on ${port}`);
});
