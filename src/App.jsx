import "./App.css";
import { useState } from "react";

const natoAlphabet = {
  a: "alpha",
  b: "bravo",
  c: "charlie",
  d: "delta",
  e: "echo",
  f: "foxtrot",
  g: "golf",
  h: "hotel",
  i: "india",
  j: "juliett",
  k: "kilo",
  l: "lima",
  m: "mike",
  n: "november",
  o: "oscar",
  p: "papa",
  q: "quebec",
  r: "romeo",
  s: "sierra",
  t: "tango",
  u: "uniform",
  v: "victor",
  w: "whiskey",
  x: "x-ray",
  y: "yankee",
  z: "zulu",
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  "!": "\"exclamation mark\"",
  '"': "\"double quote\"",
  "#": "hash",
  $: "\"dollar sign\"",
  "%": "\"percent sign\"",
  "&": "ampersand",
  "'": "apostrophe",
  "(": "\"left parenthesis\"",
  ")": "\"right parenthesis\"",
  "*": "asterisk",
  "+": "\"plus sign\"",
  ",": "comma",
  "-": "hyphen",
  ".": "period",
  "/": "slash",
  ":": "colon",
  ";": "\"semicolon\"",
  "<": "\"ess than\"",
  "=": "\"equals sign\"",
  ">": "\"greater than\"",
  "?": "\"question mark\"",
  "@": "\"at symbol\"",
  "[": "\"left square bracket\"",
  "\\": "backslash",
  "]": "\"right square bracket\"",
  "^": "caret",
  _: "underscore",
  "`": "\"grave accent\"",
  "{": "\"left curly brace\"",
  "|": "\"vertical bar\"",
  "}": "\"right curly brace\"",
  "~": "tilde",
};
function App() {
    const [input, setInput] = useState("");
    const [translated, setTranslated] = useState([]);
  
    const handleChange = (e) => {
      const text = e.target.value.toLowerCase();
      setInput(text);
      const translatedArray = text.split("").map((char, index) => {
        const word = natoAlphabet[char] || char;
        return (
          <span key={index} style={{ color: index % 2 === 0 ? "white" : "grey" }}>
            {word}
          </span>
        );
      });
      setTranslated(translatedArray);
    };
  return (
    <>
      <div className="nato-section">
        <h1 className="nato-title">NATO PHONETIC TRANSLATOR</h1>
        <input
          type="text"
          className="nato-input"
          placeholder="Type something (eg. Roger that)"
          value={input}
          onChange={handleChange}
        />
        <p className="nato-equivalent">NATO: {translated} </p>
      </div>
    </>
  );
}

export default App;
