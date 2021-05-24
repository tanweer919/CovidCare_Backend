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

  async fetchAvailableResourceByLocation(req: Request, res: Response) {
    const lat = req.body["lat"];
    const long = req.body["long"];
    try {
      let availableResources;
      if (lat && long) {
        availableResources = await AvailableResource.find({
          verified: 1,
          location: {
            $near: { $geometry: { type: "Point", coordinates: [+lat, +long] } },
          },
        }).select("-location");
      } else {
        availableResources = await AvailableResource.find({
          verified: 1,
        })
          .select("-location")
          .sort({ _id: -1 });
      }
      res.status(200).send(availableResources);
    } catch (e) {
      console.log(e);
      return res.status(400).send({ message: "Some error occured" });
    }
  }

  async fetchResourceRequestByLocation(req: Request, res: Response) {
    const lat = req.body["lat"];
    const long = req.body["long"];
    try {
      let resourceRequests;
      if (lat && long) {
        resourceRequests = await ResourceRequest.find({
          location: {
            $near: { $geometry: { type: "Point", coordinates: [+lat, +long] } },
          },
        }).select("-location");
      } else {
        resourceRequests = await ResourceRequest.find()
          .select("-location")
          .sort({ _id: -1 });
      }
      res.status(200).send(resourceRequests);
    } catch (e) {
      console.log(e);
      return res.status(400).send({ message: "Some error occured" });
    }
  }

  async findAvailableResourceById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const resource = await AvailableResource.findById(id, {
        verified: 1,
      }).select("-location");
      if (resource) {
        return res.status(200).send(resource);
      } else {
        return res.status(404).send({ message: "Some error occured" });
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send({ message: "Some error occured" });
    }
  }

  async findResourceRequestById(req: Request, res: Response) {
    const { id } = req.params;
    console.log(id);
    try {
      const resource = await ResourceRequest.findById(id).select("-location");
      console.log(resource);
      if (resource) {
        return res.status(200).send(resource);
      } else {
        return res.status(404).send({ message: "Some error occured" });
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send({ message: "Some error occured" });
    }
  }
}

export default new ResourceController();
