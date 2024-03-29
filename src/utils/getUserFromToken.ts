import JWT from "jsonwebtoken";
import { JSON_SIGNATURE } from "../key";

export const getUserFromToken = (token: string) => {
  try {
    return JWT.verify(token, JSON_SIGNATURE) as {
      userId: string;
    };
  } catch (error) {
    return null;
  }
};
