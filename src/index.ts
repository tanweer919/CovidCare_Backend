require("dotenv").config();
import Express from "express";
import cors from "cors";
import router from "./routes";
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "OPTIONS, GET, HEAD, PUT, PATCH, POST, DELETE",
    allowedHeaders: ["Content-Type", "Depth", "User-Agent", "Cache-Control"],
  })
);

//Routes
app.use("/api", router);
app.listen(8080, () => {
  console.log("Server started");
});
