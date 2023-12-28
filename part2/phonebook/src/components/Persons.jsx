const Persons = ({ filteredPersons }) => {
  return filteredPersons.map((person) => (
    <li key={person.id}>
      {person.name} {person.phoneNo}
    </li>
  ));
};

export default Persons;
