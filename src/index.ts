import Express from "express";
import cors from "cors";
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({extended: false}))
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "OPTIONS, GET, HEAD, PUT, PATCH, POST, DELETE",
    allowedHeaders: [
      "Content-Type",
      "Depth",
      "User-Agent",
      "X-File-Size",
      "X-Requested-With",
      "If-Modified-Since",
      "X-File-Name",
      "Cache-Control",
      "Authorization",
    ],
  })
);
app.listen(3000, () => {
  console.log("Server started");
});
