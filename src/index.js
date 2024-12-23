import "dotenv/config";
import connectDB from "./db/connectDb.js";
import express from "express";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("server running");
    });
  })
  .catch((err) => {
    console.log("Mongo DB Connection failed");
  });
