import fs from "fs";

//Number To Letter Conversions Object
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

/**
 * Convert Phoneword To Word Algorithm
 * @param phoneword string
 * @returns string[]
 */
export const convertPhonewordToWord = (phoneword: string): string[] => {
  if (!/^[2-9]+$/.test(phoneword)) throw new Error(`Invalid Input`);
  let words: string[] = fs
    .readFileSync(__dirname + "/../public/words.txt", "utf-8")
    .toString()
    .split("\n")
    .filter((word) => word.length === phoneword.length)
    .map((word) => word.toLowerCase());
  for (let i = 0; i < phoneword.length; i++) {
    words = words.filter((word) =>
      conversions[parseInt(phoneword[i])].includes(word[i])
    );
  }
  return words;
};

/**
 * If the phoneword argument doesn't match the regex pattern accepting only
 * numbers 2 - 9, an Error is thrown (and caught elsewhere). Using fs, the words
 * (supposedly all words) of the words.txt file are read, stringified, split by
 * line into a words array, filtered by length compared to the phoneword argument
 * and mapped to lowercase. Then looping through each digit (char) of the phoneword
 * argument, filter the words array (each loop) by comparing the digit of the phoneword to the
 * corresponding character array in the conversions object.
 */
