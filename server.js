const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const todoRouter = require("./routers/todoRouters");
const connectDB = require("./db/DbServer");
connectDB();
app.use(express.json({ extended: true }));
app.use(cors());

app.use("/api/v1/todo", todoRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("server is running");
});
