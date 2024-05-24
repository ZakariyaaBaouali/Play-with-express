import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

interface IToken {
  id: string;
  name: string;
}

export const createToken = (payload: IToken) => {
  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  return accessToken;
};

export const verifyToken = (token: string) => {
  try {
    const user = jwt.verify(token, JWT_SECRET);
    return user;
  } catch {
    return false;
  }
};
