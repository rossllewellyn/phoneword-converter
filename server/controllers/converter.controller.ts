import { Request, Response } from "express";

export const convertPhonewordToWordController = (
  req: Request,
  res: Response
): void => {
  console.log("Function convertPhonewordToWordController Execution Started");
  try {
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send("Error: " + err.message);
  }
};
