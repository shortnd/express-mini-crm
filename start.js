require("dotenv").config();

const app = require("./app");
app.set("PORT", process.env.PORT || 3000);

const server = app.listen(app.get("PORT"), () => {
	console.log(`Express Listening on http://localhost:${server.address().port}`);
});
