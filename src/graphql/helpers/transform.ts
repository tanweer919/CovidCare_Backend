import {
  AvailableResourceInterface,
  AvailableResourceDocument,
  ResourceRequestInterface,
  ResourceRequestDocument,
} from "../../interfaces/interface";

export const transformAvailableResource = (
  resource: AvailableResourceDocument
): AvailableResourceInterface => {
  const { _id, __v, ...doc } = { ...resource.toObject() };
  const id = resource.id;
  return { id, ...doc };
};
export const transformResourceRequest = (
  resource: ResourceRequestDocument
): ResourceRequestInterface => {
  const { _id, __v, ...doc } = { ...resource.toObject() };
  const id = resource.id;
  return { id, ...doc };
};
