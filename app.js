const express = require("express");

const app = express();
const { config, engine } = require("express-edge");

config({
	cache: process.env.NODE_ENV === "production"
});

app.use(engine);
app.set("views", `${__dirname}/views`);

app.use((request, response, next) => {
	response.locals.siteName = "Express Mini CRM";
	next();
});

app.get("/", (request, response) => {
	response.render("welcome");
});


module.exports = app;
