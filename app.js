import express from "express";
import ejsLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import "dotenv/config";
import path from "path";
import habitRouter from "./src/routers/habits.router.js";

const app = express();
//SETTING UP THE VIEW ENGINES
app.set("view engine", "ejs");

//SETTING UP THE DEFAULT VIEW DIRECTORY
app.set("views", path.join(path.resolve(), "src", "views", "html"));

//SETTING UP THE EJS LAYOUTS
app.use(ejsLayouts);
app.use(bodyParser.json());

//SETTING UP STATIC FOLDER SO THAT STYLE, SCRIPTS AND OTHER FILE CAN BE ACCESSED BY THE SERVER
app.use(express.static("src/views"));

//SETTING FOR POST REQUEST SO THAT REQ.BODY OBJECT CAN BE READ PROPERLY
app.use(express.urlencoded({ extended: true }));

//HANDLING ALL THE REQUEST TO THIS ROUTE
app.use("/", habitRouter);
export default app;
