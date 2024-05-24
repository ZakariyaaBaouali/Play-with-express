import express, { Request, Response, urlencoded } from "express";
import { BASE_ROOT, SERVER_PORT } from "./config";
import movieController from "./controllers/movies.controller";

const app = express();

//mid
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(`${BASE_ROOT}/movies`, movieController);

//check health
app.get(BASE_ROOT, (req: Request, res: Response) => {
  return res.status(200).send(`server running successfully 🚀🚀🚀🚀`);
});

//
app.listen(SERVER_PORT, () =>
  console.log(`Server starting at port ${SERVER_PORT}`)
);
