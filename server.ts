import express, { Request, Response } from "express";
import { BASE_ROOT, SERVER_PORT } from "./config";

const app = express();

//check health
app.get(BASE_ROOT, (req: Request, res: Response) => {
  return res.status(200).send(`server running successfully 🚀🚀🚀🚀`);
});

//
app.listen(SERVER_PORT, () =>
  console.log(`Server starting at port ${SERVER_PORT}`)
);
