import express, { Express } from "express";
import mailRouter from "./controllers/mailCrud";
import bodyParser from "body-parser";
import cors from "cors"
import * as dotenv from "dotenv";
dotenv.config();

const app: Express = express();
app.use(cors());
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send("mail app");
});

app.use("/mail", mailRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Mail Server is listening at port ${port}`);
});
