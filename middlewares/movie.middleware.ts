import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/tokens";

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  console.log("auth works 🚀🚀🚀🚀");
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).send(`Please provide a auth token`);
  } else {
    const accessToken = authHeader.split(" ")[1];
    const checkResult = verifyToken(accessToken);
    if (!checkResult) {
      return res.status(401).send(`Token : ${accessToken} is Invalid 🚀🚀🚀`);
    } else {
      req.user = checkResult;
      next();
    }
  }
};
