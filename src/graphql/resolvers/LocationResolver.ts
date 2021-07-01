import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { AutoComplete, City, PlaceDetail } from "../../interfaces/interface";
import {
  AutoCompleteSchema,
  CitySchema,
  PlaceDetailSchema,
} from "../schema/Location";

@Resolver((of) => AutoCompleteSchema)
class LocationResolver {
  @Query((returns) => [AutoCompleteSchema])
  async autoComplete(@Arg("input") input: string): Promise<AutoComplete[]> {
    const autoCompleteUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?components=country:in&key=${process.env.MAP_API_KEY}&input=${input}`;
    try {
      const { data } = await axios.get(autoCompleteUrl);
      const { predictions } = data;
      let result: AutoComplete[] = predictions.map(
        (prediction: {
          structured_formatting: { main_text: any };
          place_id: any;
        }) => {
          return {
            term: prediction?.structured_formatting?.main_text,
            placeId: prediction?.place_id,
          };
        }
      );
      result = result.filter((prediction) => prediction !== null);
      return result;
    } catch (e) {
      console.log(e);
      throw new Error("Some error occured");
    }
  }

  @Query((returns) => PlaceDetailSchema)
  async placeDetail(@Arg("placeId") placeId: string): Promise<PlaceDetail> {
    const placeDetailUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.MAP_API_KEY}`;
    try {
      const { data } = await axios.get(placeDetailUrl);
      const location = data?.result?.geometry?.location;
      const city = data?.address_components[1]?.short_name;
      return { ...location, city };
    } catch (e) {
      console.log(e);
      throw new Error("Some error occured");
    }
  }

  @Query((returns) => CitySchema)
  async city(
    @Arg("lat") lat: number,
    @Arg("long") long: number
  ): Promise<City> {
    const placeDetailUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.MAP_API_KEY}`;
    try {
      const { data } = await axios.get(placeDetailUrl);
      const components = data?.results[0];
      const cityName: string = components?.address_components[1]?.short_name;
      return { name: cityName };
    } catch (e) {
      console.log(e);
      throw new Error("Some error occured");
    }
  }
}
