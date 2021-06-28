import { Arg, Query, Resolver, Mutation } from "type-graphql";
import ResourceRequestSchema, {
  NewResourceInput,
} from "../schema/ResourceRequest";
import ResourceRequest from "../../models/ResourceRequest";
import {
  ResourceRequestInterface,
  ResourceRequestDocument,
} from "../../interfaces/interface";

@Resolver((of) => ResourceRequestSchema)
class ResourceRequestResolver {
  @Query((returns) => ResourceRequestSchema)
  async ResourceRequests(
    @Arg("lat") lat: number,
    @Arg("long") long: number
  ): Promise<ResourceRequestInterface[]> {
    try {
      let resourceRequests: ResourceRequestDocument[];
      if (lat && long) {
        resourceRequests = await ResourceRequest.find({
          verified: 1,
          location: {
            $near: { $geometry: { type: "Point", coordinates: [+lat, +long] } },
          },
        });
      } else {
        resourceRequests = await ResourceRequest.find({
          verified: 1,
        }).sort({ _id: -1 });
      }
      return resourceRequests.map((resource) => ({
        id: resource.id,
        ...resource.toObject(),
      }));
    } catch (e) {
      throw new Error("Some error occured");
    }
  }

  @Mutation((returns) => ResourceRequestSchema)
  async createAvailableResource(
    @Arg("newResourceData") newResourceData: NewResourceInput
  ): Promise<ResourceRequestInterface> {
    try {
      const resourceRequest = new ResourceRequest();
      resourceRequest.name = newResourceData["name"];
      resourceRequest.type = newResourceData["type"];
      resourceRequest.description = newResourceData["description"];
      resourceRequest.contactName = newResourceData["contactName"];
      resourceRequest.phoneNumber = newResourceData["phoneNumber"];
      resourceRequest.city = newResourceData["city"];
      resourceRequest.address = newResourceData["address"];
      resourceRequest.like = 0;
      resourceRequest.location = {
        type: "Point",
        coordinates: newResourceData["location"],
      };
      const newResource = await resourceRequest.save();
      return { id: newResource.id, ...newResource.toObject() };
    } catch (e) {
      console.log(e);
      throw new Error("Some error occured");
    }
  }
}
export default ResourceRequestResolver;
