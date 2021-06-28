import { ObjectType, Float, Field } from "type-graphql";
@ObjectType()
class LocationSchema {
  @Field()
  type: string;

  @Field((type) => [Float])
  coordinates: number[];
}
export default LocationSchema;
