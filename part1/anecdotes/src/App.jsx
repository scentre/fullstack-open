import { useState } from "react";

function App() {
  const [anecdotes, setAnecdotes] = useState([
    { anecdote: "If it hurts, do it more often.", vote: 0 },

    {
      anecdote: "Adding manpower to a late software project makes it later!",
      vote: 0,
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      vote: 0,
    },
    {
      anecdote:
        " Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      vote: 0,
    },

    {
      anecdote: "Premature optimization is the root of all evil.",
      vote: 0,
    },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      vote: 0,
    },
    {
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      vote: 0,
    },
    {
      anecdote: "The only way to go fast, is to go well.",
      vote: 0,
    },
  ]);

  const [selected, setSelected] = useState(0);

  const generateAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const highestLike = () => {
    return anecdotes.reduce(
      (acc, curr) => (acc.vote > curr.vote ? acc : curr),
      { vote: 0 }
    );
  };

  console.log(highestLike());

  const upvotes = () => {
    let newAnecdote = [...anecdotes];

    newAnecdote[selected].vote++;
    setAnecdotes(newAnecdote);
  };

  return (
    <>
      <h1>anecdotes of the day</h1>
      <div>{anecdotes[selected].anecdote}</div>
      <p>has {anecdotes[selected].vote} votes</p>
      <button onClick={upvotes}>votes</button>
      <button onClick={generateAnecdote}>next anecdote</button>

      <h1>Anecdote with most votes</h1>

      <p> {highestLike()?.anecdote} </p>
      <p>has {highestLike()?.vote} votes </p>
    </>
  );
}

export default App;
