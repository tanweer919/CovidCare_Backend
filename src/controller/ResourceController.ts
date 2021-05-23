import { Request, Response } from "express";
import { Mongoose } from "mongoose";
import AvailableResource from "../models/AvailableResource";
import ResourceRequest from "../models/ResourceRequest";
class ResourceController {
  async createAvailableResource(req: Request, res: Response) {
    const data = req.body;
    try {
      const availableResource = new AvailableResource();
      availableResource.name = data["name"];
      availableResource.type = +data["type"];
      availableResource.description = data["description"];
      availableResource.contactName = data["contactName"];
      availableResource.phoneNumber = data["phoneNumber"];
      availableResource.city = data["city"];
      availableResource.address = data["address"];
      availableResource.available = +data["available"];
      availableResource.source = data["source"];
      availableResource.like = 0;
      availableResource.verified = 0;
      availableResource.location = {
        type: "Point",
        coordinates: data["location"],
      };
      await availableResource.save();
      return res.status(201).send({ message: "Resource created successfully" });
    } catch (e) {
      console.log(e);
      return res.status(400).send({ message: "Some error occured" });
    }
  }

  async createResourceRequest(req: Request, res: Response) {
    const data = req.body;
    try {
      const resourceRequest = new ResourceRequest();
      resourceRequest.name = data["name"];
      resourceRequest.type = data["type"];
      resourceRequest.description = data["type"];
      resourceRequest.contactName = data["contactName"];
      resourceRequest.phoneNumber = data["phoneNumber"];
      resourceRequest.city = data["city"];
      resourceRequest.address = data["address"];
      resourceRequest.quantity = data["quantity"];
      resourceRequest.like = 0;
      resourceRequest.location = {
        type: "Point",
        coordinates: data["location"],
      };
      await resourceRequest.save();
      return res.status(201).send({ message: "Resource created successfully" });
    } catch (e) {
      console.log(e);
      return res.status(400).send({ message: "Some error occured" });
    }
  }
}

export default new ResourceController();
