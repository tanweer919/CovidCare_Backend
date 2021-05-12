import { Request, Response } from "express";
import { Mongoose } from "mongoose";
import AvailableResource from "../models/AvailableResource";
class ResourceController {
  async createAvailableResource(req: Request, res: Response) {
    const data = req.body;
    try {
      await AvailableResource.create(...data);
      res.status(201).send({ message: "Resource created successfully" });
    } catch (e) {
      console.log(e);
    }
  }
}
