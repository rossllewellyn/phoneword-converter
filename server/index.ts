import { config } from "dotenv";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import converterRoute from "./routes/converter.route";

// .env
config();

// Initialisations
const PORT = process.env.PORT || 3005;
const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use("/api", converterRoute);

// Not found
app.use((_: Request, res: Response) => {
  res.statusCode = 404;
  res.end("Error, not found");
});

// Listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
