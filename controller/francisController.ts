import express, { Request, Response } from "express";
import francisModel from "../model/francisModel";

export const view = async (req: Request, res: Response): Promise<Response> => {
  try {
    const tasked = await francisModel.find().sort();
    return res.status(200).json({
      message: "Viewing all information",
      data: tasked,
    });
  } catch (error) {
    return res.status(400).json({
      message: "unable to view all information",
      error,
    });
  }
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, hobby, age, address } = req.body;
    const tasked = await francisModel.create({
      name,
      email,
      age,
      hobby,
      address,
    });
    return res.status(201).json({
      message: "Information created successfully",
      data: tasked,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Unable to create information",
      error,
    });
  }
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const tasked = await francisModel.findByIdAndUpdate(id);
    return res.status(201).json({
      message: "Updated successfully",
      tasked,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error updating",
      error,
    });
  }
};

export const getone = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, hobby, email, age, address } = req.body;
    const tasked = await francisModel.findOne({
      email,
      name,
      hobby,
      age,
      address,
    });
    return res.status(200).json({
      message: "Successfully gotten one information",
      data: tasked,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error: " + error.message,
    });
  }
};

export const extinct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const tasked = await francisModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Deleted successfully", data : tasked
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occurred: " + error.message,
    });
  }
};
