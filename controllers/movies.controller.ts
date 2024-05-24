import { Router, Request, Response } from "express";
import { checkToken } from "../middlewares/movie.middleware";
import { createToken } from "../utils/tokens";

//
const route = Router();

route.get("/", checkToken, (req: Request, res: Response) => {
  const movieData = req.body;
  return res.status(200).send({
    userId: req.user.id,
    ...movieData,
  });
});

route.get("/:movieId", (req: Request, res: Response) => {
  const movieData = req.body;
  const movieId = req.params.movieId;
  return res.status(200).send({
    id: movieId,
    ...movieData,
  });
});

route.post("/", (req: Request, res: Response) => {
  const movieData = req.body;

  const accessToken = createToken({
    id: Date.now() + "",
    name: movieData.title,
  });

  return res.status(201).send(accessToken);
});

route.patch("/:movieId", (req: Request, res: Response) => {
  const movieId = req.params.movieId;
  return res
    .status(200)
    .send(`Movie with ID ${movieId} edited successfully 🚀🚀🚀🚀`);
});

route.delete("/:movieId", (req: Request, res: Response) => {
  const movieId = req.params.movieId;
  return res
    .status(200)
    .send(`Movie with ID : ${movieId} deleted successfully 🚀🚀🚀`);
});

export default route;
