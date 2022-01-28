import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const wordRef = useRef();
  const [word, setWord] = useState("");
  const [wordList, setWordList] = useState([]);
  const [loading, setLoading] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(wordRef.current.value);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.datamuse.com/words?rel_rhy=${word}`)
      .then((response) => {
        setWordList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [word]);

  return (
    <div className="app">
      <div className="container">
        <h1>Rhyme Words Generator</h1>
        <div className="content" id="word">
          <form>
            <input
              ref={wordRef}
              type="text"
              id="input-word"
              placeholder="Enter a Word"
            />
            <button type="submit" onClick={handleSubmit}>
              submit
            </button>
          </form>
        </div>
        <div className="content" id="lists">
          {loading ? (
            <h2>loading...</h2>
          ) : (
            wordList.map((word, index) => {
              return (
                <div className="list" key={index}>
                  <div className="list-num">{index + 1}.</div>
                  <div className="list-word">{word.word}</div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
