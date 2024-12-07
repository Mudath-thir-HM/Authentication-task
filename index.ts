import express from "express";
import dotenv from "dotenv";
import router from "./Route/auth.route";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/auth", router);

app.listen(5000, () => {
  console.log("we are running!");
});
