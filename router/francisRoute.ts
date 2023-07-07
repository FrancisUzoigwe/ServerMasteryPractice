import express, { Router } from "express";
import {
  create,
  getone,
  update,
  view,
  extinct,
} from "../controller/francisController";

const francis = Router();
francis.route("/view").get(view);
francis.route("/create").post(create);
francis.route("/update").patch(update);
francis.route("/get").get(getone);
francis.route("/delete:id").delete(extinct);

export default francis;
