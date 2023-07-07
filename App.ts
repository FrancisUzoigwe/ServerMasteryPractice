import express, { Application } from "express";
import cors from "cors";
import francis from "./router/francisRoute";

export const App = (app: Application) => {
  app.use(express.json()).use(cors())
  .use("/api/francis", francis)
};
