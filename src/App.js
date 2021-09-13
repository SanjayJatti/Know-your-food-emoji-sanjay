import React, { useState } from "react";
import "./App.css";

var emojiDictionary = {
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🍮": "Custard",
  "🥧": "Pie",
  "🍩": "Doughnut",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🥨": "Pretzel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🍢": "Oden",
  "🍤": "Fried Shrimp",
  "🍥": "Naruto",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🧆": "Falafel",
  "🥗": "Green Salad",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍛": "Curry Rice"
};
var emojiWeHave = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry given emoji is not available";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav className="navigation">
        <h1>Know Your Food Emoji</h1>
      </nav>
      <br />
      <input
        className="input-emoji"
        onChange={emojiInputHandler}
        placeholder="Enter food emoji here"
        style={{
          display: "block",
          fontSize: "1.1rem",
          width: "30%",
          marginTop: "1rem",
          marginBottom: "1rem",
          minHeight: "8vh",
          paddingLeft: "1rem"
        }}
      ></input>
      <h3 className="meaning">
        <em>{meaning}</em>{" "}
      </h3>
      <div className="menu-card">
        <h2 style={{ paddingBottom: "1rem" }}>Menu Card</h2>
        {emojiWeHave.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "1.5rem",
                padding: ".7rem",
                cursor: "pointer",
                textAlign: "centre"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <footer>
        <div id="footer-heading">About</div>
        <p>
          Unable recognize food emoji? This app will help you to figure out
          meaning of food emoji that you don't know.
        </p>
      </footer>
    </div>
  );
}
