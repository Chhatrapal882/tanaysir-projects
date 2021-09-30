import './App.css';
import { useState } from 'react';

function App() {
  const [meaning, setMeaning] = useState('')
  const [meaning, setMeaning] = useState('')
  const emojiDictionary = {
    "🤔": "Thinking face",
    "⛷️": "Skier",
    "❤️": "Heart",
    "😠": "Angry face",
    "🙃": "Upside down face",
    "🐱": "Cat face",
    "😽": "Kissing cat face",
    "🤗": "Hugging face",
    "🌝": "Full moon emoji",
    "👻": "Ghost"
  }
  function checkmeaning(event) {
    const userInput = event.target.value
    console.log(userInput)
    var meaning = emojiDictionary[userInput]
    if (meaning === undefined) {
      meaning = "oops!Emoji not found"
      }
    setMeaning(meaning)

  }
  return (
    <div className="App" >
      <h1>Inside out!</h1>
      <h2>Enter emoji to search for a name</h2>
      <input onChange={checkmeaning} />
      <h1 style={{ color: "green" }}>{meaning}</h1>
    </div>
  );
}

export default App;
