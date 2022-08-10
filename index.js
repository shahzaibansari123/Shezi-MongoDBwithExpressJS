import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
mongoose
  .connect(process.env.CONNECTION)
  .then(() => console.log("connected"))
  .catch(() => console.log("Database connection failed!"));

app.listen(3000, () => console.log("server running "));
