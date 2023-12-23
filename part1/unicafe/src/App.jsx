import { useState } from "react";

const Button = ({ name, onClick }) => {
  return <button onClick={() => onClick((data) => data + 1)}>{name}</button>;
};

const Statistics = ({ display, name }) => {
  return (
    <table>
      <tr></tr>
      <tr>
        <td>{name}</td>

        <td>{display}</td>
      </tr>
    </table>
  );
};
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let total = bad + good + neutral;

  return (
    <>
      <p>Give feedback</p>

      <Button name={"good"} onClick={setGood} />
      <Button name={"neutral"} onClick={setNeutral} />
      <Button name={"bad"} onClick={setBad} />

      <h1> Statistics</h1>
      {total == 0 ? (
        "No feedback given"
      ) : (
        <>
          {" "}
          <Statistics display={good} name={"good"} />
          <Statistics display={neutral} name={"neutral"} />
          <Statistics display={bad} name={"bad"} />
          <Statistics display={total} name={"all"} />
          <Statistics
            display={(bad * -1 + good + neutral * 0) / total}
            name={"average"}
          />
          <Statistics display={(good / total) * 100 + "%"} name={"positive"} />{" "}
        </>
      )}
    </>
  );
}

export default App;
