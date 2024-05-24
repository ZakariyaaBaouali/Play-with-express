import { Router, Request, Response } from "express";
import { checkToken } from "../middlewares/movie.middleware";
import multer from "multer";
import { v4 as uuid } from "uuid";

const route = Router();

//config storage - uploader
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "storage");
  },
  filename(req, file, callback) {
    const fileName = `${uuid()}.${file.mimetype.split("/")[1]}`;
    req.filename = fileName;
    callback(null, fileName);
  },
});

const upload = multer({
  storage: storage,
});

route.post(
  "/movie/:movieId",
  upload.single("avatar"),
  (req: Request, res: Response) => {
    const movieId = req.params.movieId;
    const avatar = req.filename;
    return res.status(201).send({
      movieId,
      avatar,
    });
  }
);

export default route;
