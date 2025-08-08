import express, { urlencoded } from "express";
import colors from "colors";
import dotenv from "dotenv";
import { Apies } from "./Routes/Apies.js";
import { errorHandling } from "./middleware/errorHandling.js";
import { connectDB } from "./Config/connect.js";
import cors from "cors";
dotenv.config();
const app = express();
// to be save from cors police
app.use(cors());
// Connection with MongoDb
connectDB();
// converting to json
app.use(express.json());
// confiusion
app.use(urlencoded({ extended: false }));
// Api call
app.use("/api/User/", Apies);
// Error control
app.use(errorHandling);
// Server Running

app.listen(process.env.Port, () =>
  console.log(`server is started ${process.env.Port}`)
);
