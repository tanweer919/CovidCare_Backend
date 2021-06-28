import { ObjectType, ID, Int, Field, InputType, Float } from "type-graphql";
import LocationSchema from "./Location";

@ObjectType()
class AvailableResourceSchema {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => Int)
  type: number;

  @Field()
  description: string;

  @Field()
  contactName: string;

  @Field()
  phoneNumber: string;

  @Field((type) => LocationSchema)
  location: LocationSchema;

  @Field()
  city: string;

  @Field()
  address: string;

  @Field((type) => Int)
  available: number;

  @Field((type) => Int)
  verified: number;

  @Field()
  source: string;

  @Field((type) => Int)
  like: number;

  @Field()
  created: Date;
}

@InputType()
export class NewAvailableResourceInput {
  @Field()
  name: string;

  @Field((type) => Int)
  type: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  contactName: string;

  @Field()
  phoneNumber: string;

  @Field((type) => [Float])
  location: number[];

  @Field()
  city: string;

  @Field()
  address: string;

  @Field((type) => Int)
  available: number;

  @Field()
  source: string;
}

export default AvailableResourceSchema;
