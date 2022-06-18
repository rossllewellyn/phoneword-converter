import { config } from "dotenv";
import express, { Application, Request, Response } from "express";
import converterRoute from "./routes/converter.route";

config();

const PORT = process.env.PORT || 3005;
const app: Application = express();

app.use(express.json());

app.use("/api", converterRoute);

app.use((_: Request, res: Response) => {
  res.statusCode = 404;
  res.end("Error, not found");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
