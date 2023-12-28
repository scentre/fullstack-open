import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNo: "040-123456", id: 1 },
    { name: "Ada Lovelace", phoneNo: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phoneNo: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phoneNo: "39-23-6423122", id: 4 },
  ]);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.find((each) => each.name == name || each.phoneNo == number)) {
      alert(`${name} is already added to phonebook`);
    } else {
      setPersons([
        ...persons,
        { name, phoneNo: number, id: persons.length + 1 },
      ]);
    }
  };

  return (
    <div>
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
        <Persons filteredPersons={filteredPersons} />
      </ul>
    </div>
  );
};

export default App;
