"use strict";
// import axios from "axios";
// import { Request, Response } from "express";
// import { Mongoose } from "mongoose";
// import {
//   AvailableResourceDocument,
//   ResourceRequestDocument,
// } from "../interfaces/interface";
// import AvailableResource from "../models/AvailableResource";
// import ResourceRequest from "../models/ResourceRequest";
// class ResourceController {
//   async createAvailableResource(req: Request, res: Response) {
//     const data = req.body;
//     try {
//       const availableResource = new AvailableResource();
//       availableResource.name = data["name"];
//       availableResource.type = +data["type"];
//       availableResource.description = data["description"];
//       availableResource.contactName = data["contactName"];
//       availableResource.phoneNumber = data["phoneNumber"];
//       availableResource.city = data["city"];
//       availableResource.address = data["address"];
//       availableResource.available = +data["available"];
//       availableResource.source = data["source"];
//       availableResource.like = 0;
//       availableResource.verified = 0;
//       availableResource.location = {
//         type: "Point",
//         coordinates: data["location"],
//       };
//       await availableResource.save();
//       return res.status(201).send({ message: "Resource created successfully" });
//     } catch (e) {
//       console.log(e);
//       return res.status(400).send({ message: "Some error occured" });
//     }
//   }
//   async createResourceRequest(req: Request, res: Response) {
//     const data = req.body;
//     try {
//       const resourceRequest = new ResourceRequest();
//       resourceRequest.name = data["name"];
//       resourceRequest.type = data["type"];
//       resourceRequest.description = data["type"];
//       resourceRequest.contactName = data["contactName"];
//       resourceRequest.phoneNumber = data["phoneNumber"];
//       resourceRequest.city = data["city"];
//       resourceRequest.address = data["address"];
//       resourceRequest.quantity = data["quantity"];
//       resourceRequest.like = 0;
//       resourceRequest.location = {
//         type: "Point",
//         coordinates: data["location"],
//       };
//       await resourceRequest.save();
//       return res.status(201).send({ message: "Resource created successfully" });
//     } catch (e) {
//       console.log(e);
//       return res.status(400).send({ message: "Some error occured" });
//     }
//   }
//   async fetchAllAvailableResourceByLocation(req: Request, res: Response) {
//     const lat = req.body["lat"];
//     const long = req.body["long"];
//     try {
//       let availableResources: AvailableResourceDocument[];
//       if (lat && long) {
//         availableResources = await AvailableResource.find({
//           verified: 1,
//           location: {
//             $near: { $geometry: { type: "Point", coordinates: [+lat, +long] } },
//           },
//         }).select("-location");
//       } else {
//         availableResources = await AvailableResource.find({
//           verified: 1,
//         })
//           .select("-location")
//           .sort({ _id: -1 });
//       }
//       res.status(200).send(availableResources);
//     } catch (e) {
//       console.log(e);
//       return res.status(400).send({ message: "Some error occured" });
//     }
//   }
//   async fetchAllResourceRequestByLocation(req: Request, res: Response) {
//     const lat = req.body["lat"];
//     const long = req.body["long"];
//     try {
//       let resourceRequests: ResourceRequestDocument[];
//       if (lat && long) {
//         resourceRequests = await ResourceRequest.find({
//           location: {
//             $near: { $geometry: { type: "Point", coordinates: [+lat, +long] } },
//           },
//         }).select("-location");
//       } else {
//         resourceRequests = await ResourceRequest.find()
//           .select("-location")
//           .sort({ _id: -1 });
//       }
//       res.status(200).send(resourceRequests);
//     } catch (e) {
//       console.log(e);
//       return res.status(400).send({ message: "Some error occured" });
//     }
//   }
//   async findAvailableResourceById(req: Request, res: Response) {
//     const { id } = req.params;
//     try {
//       const resource = await AvailableResource.findOne({
//         _id: id,
//         verified: 1,
//       }).select("-location");
//       if (resource) {
//         return res.status(200).send(resource);
//       } else {
//         return res.status(404).send({ message: "Some error occured" });
//       }
//     } catch (e) {
//       console.log(e);
//       return res.status(400).send({ message: "Some error occured" });
//     }
//   }
//   async findResourceRequestById(req: Request, res: Response) {
//     const { id } = req.params;
//     try {
//       const resource = await ResourceRequest.findById(id).select("-location");
//       if (resource) {
//         return res.status(200).send(resource);
//       } else {
//         return res.status(404).send({ message: "Some error occured" });
//       }
//     } catch (e) {
//       console.log(e);
//       return res.status(400).send({ message: "Some error occured" });
//     }
//   }
//   async searchAvailableResourceByLocation(req: Request, res: Response) {
//     const placeId = req.body["placeId"];
//     const type = req.body["type"];
//     const placeDetailUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.MAP_API_KEY}`;
//     try {
//       const { data } = await axios.get(placeDetailUrl);
//       const location = data?.result?.geometry?.location;
//       const lat = location?.lat;
//       const long = location?.lng;
//       try {
//         let availableResources: AvailableResourceDocument[];
//         if (lat && long && type) {
//           availableResources = await AvailableResource.find({
//             verified: 1,
//             type,
//             location: {
//               $near: {
//                 $geometry: { type: "Point", coordinates: [+lat, +long] },
//                 $maxDistance: 50000,
//               },
//             },
//           }).select("-location");
//         } else {
//           availableResources = [];
//         }
//         res.status(200).send(availableResources);
//       } catch (e) {
//         console.log(e);
//         return res.status(400).send({ message: "Some error occured" });
//       }
//     } catch (e) {
//       console.log(e);
//       res.status(400).send({ message: "Some error occured" });
//     }
//   }
//   async searchResourceRequestByLocation(req: Request, res: Response) {
//     const placeId = req.body["placeId"];
//     const type = req.body["type"];
//     const placeDetailUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.MAP_API_KEY}`;
//     try {
//       const { data } = await axios.get(placeDetailUrl);
//       const location = data?.result?.geometry?.location;
//       const lat = location?.lat;
//       const long = location?.lng;
//       try {
//         let resourceRequests: ResourceRequestDocument[];
//         if (lat && long) {
//           resourceRequests = await ResourceRequest.find({
//             type,
//             location: {
//               $near: {
//                 $geometry: { type: "Point", coordinates: [+lat, +long] },
//                 $maxDistance: 50000,
//               },
//             },
//           }).select("-location");
//         } else {
//           resourceRequests = [];
//         }
//         res.status(200).send(resourceRequests);
//       } catch (e) {
//         console.log(e);
//         return res.status(400).send({ message: "Some error occured" });
//       }
//     } catch (e) {
//       console.log(e);
//       res.status(400).send({ message: "Some error occured" });
//     }
//   }
// }
// export default new ResourceController();
//# sourceMappingURL=ResourceController.js.map