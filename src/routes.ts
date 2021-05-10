import Express from "express";
import cors from "cors"
import LocationController  from "./controller/LocationController";
const router = Express.Router()
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
router.post('/autocomplete', LocationController.autoComplete);
router.options("*", cors());

export default router