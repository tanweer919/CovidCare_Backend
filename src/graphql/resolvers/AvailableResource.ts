import { Arg, Query, Resolver, Mutation } from "type-graphql";
import AvailableResourceSchema, {
  NewResourceInput,
} from "../schema/AvailableResource";
import AvailableResource from "../../models/AvailableResource";
import {
  AvailableResourceInterface,
  AvailableResourceDocument,
} from "../../interfaces/interface";

@Resolver((of) => AvailableResourceSchema)
class AvailableResourceResolver {
  @Query((returns) => AvailableResourceSchema)
  async availableResources(
    @Arg("lat") lat: number,
    @Arg("long") long: number
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
      return availableResources.map((resource) => ({
        id: resource.id,
        ...resource.toObject(),
      }));
    } catch (e) {
      throw new Error("Some error occured");
    }
  }

  @Mutation((returns) => AvailableResourceSchema)
  async createAvailableResource(
    @Arg("newResourceData") newResourceData: NewResourceInput
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
}
export default AvailableResourceResolver;
