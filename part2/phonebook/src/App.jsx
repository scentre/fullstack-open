import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import "./app.css";

import notes from "./services/notes";
import Notification from "./components/Notification";
const App = () => {
  const [persons, setPersons] = useState([]);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [messageStatus, setMessageStatus] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let named = name.trim();

  const handleSubmit = (e) => {
    e.preventDefault();

    let person = persons.find((each) => each?.name == named);

    if (person) {
      const resultData = window.confirm(
        ` ${person.name} is already  added to the phonebook, replace the old number with a new one  ?`
      );

      if (resultData) {
        notes
          .update(person.id, {
            name: named,
            phoneNo: number,
            id: persons.length + 1,
          })
          .then((result) => {
            setPersons(
              persons.map((each) => (each.name == person.name ? result : each))
            );

            setName("");
            setNumber("");
          })
          .then(() => {
            setErrorMessage("Edited " + named);
            setMessageStatus("success");

            setTimeout(() => setErrorMessage(null), 3000);
          })
          .catch((err) => {
            setErrorMessage(err);
            setMessageStatus("failed");
          });
      }
    } else {
      notes
        .create({
          name: named,
          phoneNo: number,
          id: persons.length + 1,
        })
        .then((result) => {
          setPersons(persons.concat(result));

          setName("");
          setNumber("");
        })
        .then(() => {
          setErrorMessage("added " + named);
          setMessageStatus("success");

          setTimeout(() => setErrorMessage(null), 3000);
        })
        .catch((err) => {
          setErrorMessage(err);
          setMessageStatus("failed");
        });
    }
  };

  useEffect(() => {
    notes.getAll().then((initialData) => {
      setPersons(initialData);
    });
  }, []);

  return (
    <div>
      <h1>PhoneBook</h1>

      <Notification message={errorMessage} status={messageStatus} />
      <span>filter shown with </span>
      <Filter handleSearch={handleSearch} searchTerm={searchTerm} />

      <PersonForm
        handleSubmit={handleSubmit}
        name={name}
        number={number}
        setNumber={setNumber}
        setName={setName}
      />

      <p>Numbers</p>
      <ul>
        <Persons
          filteredPersons={filteredPersons}
          setPersons={setPersons}
          setErrorMessage={setErrorMessage}
          setMessageStatus={setMessageStatus}
        />
      </ul>
    </div>
  );
};

export default App;
