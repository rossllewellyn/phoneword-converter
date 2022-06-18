import fs from "fs";

const conversions: { [key: number]: string[] } = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

export const convertPhonewordToWord = (phoneword: string): string[] => {
  if (!/^[2-9]+$/.test(phoneword)) throw new Error(`Invalid Input`);
  let text: string[] = fs
    .readFileSync(__dirname + "/../public/words.txt", "utf-8")
    .toString()
    .split("\n")
    .filter((word) => word.length === phoneword.length)
    .map((word) => word.toLowerCase());
  for (let i = 0; i < phoneword.length; i++) {
    text = text.filter((word) =>
      conversions[parseInt(phoneword[i])].includes(word[i])
    );
  }
  return text;
};
