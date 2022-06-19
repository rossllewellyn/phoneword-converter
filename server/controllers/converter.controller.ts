import { Request, Response } from "express";
import { convertPhonewordToWord } from "./converter.helper";

/**
 * Convert Phoneword to Word Controller
 * @param req Express Request { phoneword: string }
 * @param res Express Response
 */
export const convertPhonewordToWordController = (
  req: Request<{ phoneword: string }>,
  res: Response
): void => {
  console.log("Function convertPhonewordToWordController Execution Started");
  try {
    const { phoneword } = req.params;
    const text: string[] = convertPhonewordToWord(phoneword);
    res.status(200);
    res.json(text);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.json("Error: " + err.message);
  }
};
