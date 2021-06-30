import { Arg, Query, Resolver, Mutation } from "type-graphql";
import ResourceRequestSchema, {
  NewResourceRequestInput,
} from "../schema/ResourceRequest";
import ResourceRequest from "../../models/ResourceRequest";
import {
  ResourceRequestInterface,
  ResourceRequestDocument,
} from "../../interfaces/interface";
import axios from "axios";
import { transformResourceRequest } from "../helpers/transform";

@Resolver((of) => ResourceRequestSchema)
class ResourceRequestResolver {
  @Query((returns) => [ResourceRequestSchema])
  async resourceRequests(
    @Arg("lat", { nullable: true }) lat: number,
    @Arg("long", { nullable: true }) long: number
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
      return resourceRequests.map((resource) =>
        transformResourceRequest(resource)
      );
    } catch (e) {
      throw new Error("Some error occured");
    }
  }

  @Mutation((returns) => ResourceRequestSchema)
  async createResourceRequest(
    @Arg("newResourceData") newResourceData: NewResourceRequestInput
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
      return transformResourceRequest(newResource);
    } catch (e) {
      console.log(e);
      throw new Error("Some error occured");
    }
  }

  @Query((returns) => ResourceRequestSchema)
  async availableResource(
    @Arg("id") id: string
  ): Promise<ResourceRequestInterface> {
    try {
      const resource = await ResourceRequest.findOne({
        _id: id,
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

  @Query((returns) => [ResourceRequestSchema])
  async resourceRequestsByLocation(
    @Arg("placeId") placeId: string,
    @Arg("type") type: number
  ): Promise<ResourceRequestInterface[]> {
    const placeDetailUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.MAP_API_KEY}`;
    try {
      const { data } = await axios.get(placeDetailUrl);
      const location = data?.result?.geometry?.location;
      const lat = location?.lat;
      const long = location?.lng;
      try {
        let resourceRequests: ResourceRequestDocument[];
        if (lat && long && type) {
          resourceRequests = await ResourceRequest.find({
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
          resourceRequests = [];
        }
        return resourceRequests.map((resource) =>
          transformResourceRequest(resource)
        );
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
export default ResourceRequestResolver;
