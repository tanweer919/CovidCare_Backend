import Express from "express";
import cors from "cors";
import LocationController from "./controller/LocationController";
import ResourceController from "./controller/ResourceController";
import ResourceRequest from "./models/ResourceRequest";
const router = Express.Router();
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
router.post("/autocomplete", LocationController.autoComplete);
router.post("/place", LocationController.fetchPlaceDetail);
router.post("/available/add", ResourceController.createAvailableResource);
router.post("/request/add", ResourceController.createResourceRequest);
router.options("*", cors());

export default router;
