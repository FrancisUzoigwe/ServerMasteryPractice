import express, { Application } from "express";
import dotenv from "dotenv";
dotenv.config();
import { App } from "./App";
import { francisDB } from "./config/francisDB";


const app: Application = express();

const Port = parseInt(process.env.APPLICATION_PROCESS!);
const realPort = Port;
App(app);
francisDB();
const Server = app.listen(realPort, () => {
  console.log("Server is live and listening on port", realPort);
});

process.on("uncaughtException", (err) => {
  console.log("uncaughtException");
  console.log("Server is shutting down due to uncaught exception", err);

  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log("UnhandledRejection");
  console.log("Server is shutting down due to unhandled rejection", reason);

  Server.close(() => {
    process.exit(1);
  });
});
