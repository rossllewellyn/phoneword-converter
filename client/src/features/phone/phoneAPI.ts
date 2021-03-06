import axios from "axios";

const BASE_URL = "http://localhost:3005/api/converter";

/**
 * Fetch words from API
 * @param phoneword string
 * @returns string[]
 */
export const fetchWords = async (phoneword: string) => {
  try {
    let convertedWords = await axios.get(`${BASE_URL}/${phoneword}`);
    return convertedWords;
  } catch (err) {
    console.error(err);
  }
};
