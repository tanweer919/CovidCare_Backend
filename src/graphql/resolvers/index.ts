import availableResourceResolver from "./availableResource";
import resourceRequestResolver from "./resourceRequest";

const rootResolver = {
  ...availableResourceResolver,
  ...resourceRequestResolver,
};

export default rootResolver;
