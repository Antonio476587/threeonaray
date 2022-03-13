const app = require("./app");

app.listen(app.get("port"));
console.log("listen en puerto", app.get("port"));