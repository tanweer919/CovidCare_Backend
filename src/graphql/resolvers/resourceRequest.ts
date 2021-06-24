
import ResourceRequest from '../../models/ResourceRequest';
import { ResourceRequestInterface } from '../../interfaces/interface'
const resourceRequestResolver = {
  resourceRequests : ({lat, long}) {
    try {
      let resourceRequests: ResourceRequestInterface[];
      if (lat && long) {
        resourceRequests = await ResourceRequest.find({
          location: {
            $near: { $geometry: { type: "Point", coordinates: [+lat, +long] } },
          },
        });
      } else {
        resourceRequests = await ResourceRequest.find({
          verified: 1,
        })
          .sort({ _id: -1 });
      }
      return resourceRequests.map((resource) => ({
          _id: resource.id,
          ...resource
      }))
    } catch (e) {
      throw new Error("Some error occured")
    }
  },
};
export default resourceRequestResolver;