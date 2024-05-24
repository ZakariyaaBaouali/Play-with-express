import express, { Request, Response, urlencoded } from "express";
import { BASE_ROOT, SERVER_PORT, UPLOAD_ROOT } from "./config";
import movieController from "./controllers/movies.controller";
import uploadController from "./controllers/upload.controller";

const app = express();

//global
declare global {
  namespace Express {
    interface Request {
      user?: any;
      filename?: string;
    }
  }
}

//mid
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(`${BASE_ROOT}/movies`, movieController);
app.use(`${BASE_ROOT}/upload`, uploadController);
app.use(`${UPLOAD_ROOT}`, express.static("storage"));

//check health
app.get(BASE_ROOT, (req: Request, res: Response) => {
  return res.status(200).send(`server running successfully 🚀🚀🚀🚀`);
});

//
app.listen(SERVER_PORT, () =>
  console.log(`Server starting at port ${SERVER_PORT}`)
);
