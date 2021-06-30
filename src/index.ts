require("dotenv").config();
import "reflect-metadata"
import Express from "express";
import cors from "cors";
import AvailableResourceResolver from "./graphql/resolvers/AvailableResourceResolver";
import ResourceRequestResolver from "./graphql/resolvers/ResourceRequestResolver";
import { buildSchema } from "type-graphql";
import { connectToDatabase } from "./config/Database";
import { ApolloServer } from "apollo-server-express";
const main = async () => {
  const schema = await buildSchema({
    resolvers: [AvailableResourceResolver, ResourceRequestResolver],
    emitSchemaFile: true,
    validate: false,
  });

  const apolloServer = new ApolloServer({ schema });
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

  apolloServer.applyMiddleware({ app, cors: false});

  //Sever
  // app.use("/api", router);
  app.listen(process.env.PORT || 8080, () => {
    console.log("Server started");
  });
};
main().catch((err) => console.log(err));
