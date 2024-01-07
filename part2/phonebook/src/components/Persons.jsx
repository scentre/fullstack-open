import notes from "../services/notes";

const Persons = ({
  filteredPersons,
  setPersons,
  setErrorMessage,
  setMessageStatus,
}) => {
  return filteredPersons.map((person) => {
    const deleteNumber = (id, name) => {
      const result = window.confirm(`Delete ${name} ?`);

      if (result) {
        notes
          .deleteData(id)
          .then(() => {
            setPersons(filteredPersons.filter((each) => each.id !== id));
            setMessageStatus("success");
            setErrorMessage(`information of ${name}  removed`);
          })
          .catch(() => {
            setMessageStatus("failed");
            setErrorMessage(`information of ${name} already removed`);
          });
      }
    };
    return (
      <li key={person.id}>
        {person.name} {person.phoneNo}
        <button onClick={() => deleteNumber(person.id, person.name)}>
          {" "}
          delete
        </button>
      </li>
    );
  });
};

export default Persons;
