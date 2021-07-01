import { ObjectType, Float, Field } from "type-graphql";
@ObjectType()
export class LocationSchema {
  @Field()
  type: string;

  @Field((type) => [Float])
  coordinates: number[];
}

@ObjectType()
export class AutoCompleteSchema {
  @Field()
  term: string;

  @Field()
  placeId: string;
}

@ObjectType()
export class PlaceDetailSchema {
  @Field({ nullable: true })
  lat?: string;

  @Field({ nullable: true })
  lng?: string;

  @Field({ nullable: true })
  city?: string;
}

@ObjectType()
export class CitySchema {
  @Field({ nullable: true })
  name?: string;
}
