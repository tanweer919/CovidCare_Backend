import { Arg, Query, Resolver, Mutation } from "type-graphql";
import AvailableResourceSchema, {
  NewAvailableResourceInput,
} from "../schema/AvailableResource";
import AvailableResource from "../../models/AvailableResource";
import {
  AvailableResourceInterface,
  AvailableResourceDocument,
} from "../../interfaces/interface";
import axios from "axios";

@Resolver((of) => AvailableResourceSchema)
class AvailableResourceResolver {
  @Query((returns) => [AvailableResourceSchema])
  async availableResources(
    @Arg("lat", { nullable: true }) lat: number,
    @Arg("long", { nullable: true }) long: number
  ): Promise<AvailableResourceInterface[]> {
    try {
      let availableResources: AvailableResourceDocument[];
      if (lat && long) {
        availableResources = await AvailableResource.find({
          verified: 1,
          location: {
            $near: { $geometry: { type: "Point", coordinates: [+lat, +long] } },
          },
        });
      } else {
        availableResources = await AvailableResource.find({
          verified: 1,
        }).sort({ _id: -1 });
      }
      return availableResources.map((resource) => {
        const { _id, __v, ...doc } = { ...resource.toObject() };
        const id = resource.id;
        return { id, ...doc };
      });
    } catch (e) {
      throw new Error("Some error occured");
    }
  }

  @Mutation((returns) => AvailableResourceSchema)
  async createAvailableResource(
    @Arg("newResourceData") newResourceData: NewAvailableResourceInput
  ): Promise<AvailableResourceInterface> {
    try {
      const availableResource = new AvailableResource();
      availableResource.name = newResourceData["name"];
      availableResource.type = newResourceData["type"];
      availableResource.description = newResourceData["description"];
      availableResource.contactName = newResourceData["contactName"];
      availableResource.phoneNumber = newResourceData["phoneNumber"];
      availableResource.city = newResourceData["city"];
      availableResource.address = newResourceData["address"];
      availableResource.available = newResourceData["available"];
      availableResource.source = newResourceData["source"];
      availableResource.like = 0;
      availableResource.verified = 0;
      availableResource.location = {
        type: "Point",
        coordinates: newResourceData["location"],
      };
      const newResource = await availableResource.save();
      return { id: newResource.id, ...newResource.toObject() };
    } catch (e) {
      console.log(e);
      throw new Error("Some error occured");
    }
  }

  @Query((returns) => AvailableResourceSchema)
  async availableResource(
    @Arg("id") id: string
  ): Promise<AvailableResourceInterface> {
    try {
      const resource = await AvailableResource.findOne({
        _id: id,
        verified: 1,
      });
      if (resource) {
        const { _id, __v, ...doc } = { ...resource.toObject() };
        return { id: resource.id, ...doc };
      } else {
        throw new Error("Some error occured");
      }
    } catch (e) {
      console.log(e);
      throw new Error("Some error occured");
    }
  }

  @Query((returns) => [AvailableResourceSchema])
  async availableResourcesByLocation(
    @Arg("placeId") placeId: string,
    @Arg("type") type: number
  ): Promise<AvailableResourceInterface[]> {
    const placeDetailUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.MAP_API_KEY}`;
    try {
      const { data } = await axios.get(placeDetailUrl);
      const location = data?.result?.geometry?.location;
      const lat = location?.lat;
      const long = location?.lng;
      try {
        let availableResources: AvailableResourceDocument[];
        if (lat && long && type) {
          availableResources = await AvailableResource.find({
            verified: 1,
            type,
            location: {
              $near: {
                $geometry: { type: "Point", coordinates: [+lat, +long] },
                $maxDistance: 50000,
              },
            },
          });
        } else {
          availableResources = [];
        }
        return availableResources.map((resource) => {
          const { _id, __v, ...doc } = { ...resource.toObject() };
          const id = resource.id;
          return { id, ...doc };
        });
      } catch (e) {
        console.log(e);
        throw new Error("Some error occured");
      }
    } catch (e) {
      console.log(e);
      throw new Error("Some error occured");
    }
  }
}
export default AvailableResourceResolver;
