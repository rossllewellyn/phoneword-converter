import { Request, Response } from "express";

import { convertPhonewordToWord } from "./converter.helper";

export const convertPhonewordToWordController = (
  req: Request<{ phoneword: string }>,
  res: Response
): void => {
  console.log("Function convertPhonewordToWordController Execution Started");
  try {
    const { phoneword } = req.params;
    const text: string[] = convertPhonewordToWord(phoneword);
    res.status(200);
    res.send(text);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send("Error: " + err.message);
  }
};
