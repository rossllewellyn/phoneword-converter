import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { inputDigit, clearInput, selectPhoneword } from "./phonewordSlice";
import { fetchWords } from "./phoneAPI";

export const Phone = () => {
  const phoneword = useAppSelector(selectPhoneword);
  const dispatch = useAppDispatch();
  const [convertedWords, setConvertedWords] = useState("Phoneword Converter");

  const convertPhoneword = async (input: string) => {
    try {
      const res = await fetchWords(input);
      if (res) setConvertedWords(res.data.join(" "));
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div className="phone-container">
      <h2 className="title">{convertedWords}</h2>
      <div className="input-container">
        <input type="text" value={phoneword} />
      </div>
      <div className="button-container">
        <div className="button-row">
          <button disabled>1</button>
          <button onClick={() => dispatch(inputDigit("2"))}>2 abc</button>
          <button onClick={() => dispatch(inputDigit("3"))}>3 def</button>
        </div>
        <div className="button-row">
          <button onClick={() => dispatch(inputDigit("4"))}>4 ghi</button>
          <button onClick={() => dispatch(inputDigit("5"))}>5 jkl</button>
          <button onClick={() => dispatch(inputDigit("6"))}>6 mno</button>
        </div>
        <div className="button-row">
          <button onClick={() => dispatch(inputDigit("7"))}>7 pqrs</button>
          <button onClick={() => dispatch(inputDigit("8"))}>8 tuv</button>
          <button onClick={() => dispatch(inputDigit("9"))}>9 wxyz</button>
        </div>
        <div className="button-row">
          <button disabled>*</button>
          <button disabled>0</button>
          <button disabled>#</button>
        </div>
        <div className="button-row">
          <button onClick={() => convertPhoneword(phoneword)}>Send</button>
          <button
            onClick={() => {
              dispatch(clearInput());
              setConvertedWords("Phoneword Converter");
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
