import express from "express";
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public",express.static(__dirname + "/public"));


const handleListen = () => console.log('Listening on http:localhost:3000')
app.get("/", (req, res) => res.render("home"));
app.listen(3000, handleListen);