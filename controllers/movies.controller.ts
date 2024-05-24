import { Router, Request, Response } from "express";

//
const route = Router();

route.get("/", (req: Request, res: Response) => {
  const movieData = req.body;
  return res.status(200).send(movieData);
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

  return res.status(201).send({
    id: Date.now(),
    ...movieData,
  });
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
