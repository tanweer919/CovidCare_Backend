import { ObjectType, Int, Field, InputType, Float, ID } from "type-graphql";
import LocationSchema from "./Location";

@ObjectType()
class ResourceRequestSchema {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => Int)
  type: number;

  @Field()
  description: string;

  @Field((type) => LocationSchema)
  location: LocationSchema;

  @Field()
  city: string;

  @Field()
  address: string;

  @Field()
  contactName: string;

  @Field()
  phoneNumber: string;

  @Field()
  quantity: string;

  @Field((type) => Int)
  like: number;

  @Field()
  created: Date;
}

@InputType()
export class NewResourceInput {
  @Field()
  name: string;

  @Field((type) => Int)
  type: number;

  @Field({ nullable: true })
  description?: string;

  @Field((type) => [Float])
  location: number[];

  @Field()
  city: string;

  @Field()
  address: string;

  @Field()
  contactName: string;

  @Field()
  phoneNumber: string;

  @Field()
  quantity: string;
}

export default ResourceRequestSchema;
