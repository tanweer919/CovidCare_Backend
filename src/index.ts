require("dotenv").config();
import Express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import router from "./routes";
import { connectToDatabase } from "./config/Database";
import schema from "./graphql/schema/index";
import rootResolver from "./graphql/resolvers/index";
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

//ConnectToDatabase
connectToDatabase();

//Graphql
app.use(
  "/graphql",
  graphqlHTTP({ schema: schema, rootValue: rootResolver, graphiql: true })
);

//Routes
// app.use("/api", router);
app.listen(process.env.PORT || 8080, () => {
  console.log("Server started");
});
