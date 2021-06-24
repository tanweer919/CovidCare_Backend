
import AvailableResource from '../../models/AvailableResource';
import { AvailableResourceInterface } from '../../interfaces/interface'
const availableResourceResolver = {
  availableResources : ({lat, long}) {
    try {
      let availableResources: AvailableResourceInterface[];
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
        })
          .sort({ _id: -1 });
      }
      return availableResources.map((resource) => ({
          _id: resource.id,
          ...resource
      }))
    } catch (e) {
      throw new Error("Some error occured")
    }
  },
};
export default availableResourceResolver;