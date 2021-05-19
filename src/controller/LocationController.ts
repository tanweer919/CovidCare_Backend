import axios from "axios";
import express, { Request, Response } from "express";
class LocationController {
  async autoComplete(req: Request, res: Response) {
    const input = req.body["input"];
    const autoCompleteUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?components=country:in&key=${process.env.MAP_API_KEY}&input=${input}`;
    try {
      const { data } = await axios.get(autoCompleteUrl);
      const { predictions } = data;
      let result = predictions.map((prediction) => {
        return {
          term: prediction?.structured_formatting?.main_text,
          placeId: prediction?.place_id,
        };
      });
      result = result.filter((prediction) => prediction !== null);
      res.status(200).send(result);
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: "Some error occured" });
    }
  }

  async fetchPlaceDetail(req: Request, res: Response) {
    const placeId = req.body["placeId"];
    const placeDetailUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.MAP_API_KEY}`;
    try {
      const { data } = await axios.get(placeDetailUrl);
      const location = data?.result?.geometry?.location;
      res.status(200).send(location);
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: "Some error occured" });
    }
  }
}

export default new LocationController();
