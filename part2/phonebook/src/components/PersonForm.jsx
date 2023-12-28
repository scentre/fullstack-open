const PersonForm = ({ handleSubmit, setName, setNumber, name, number }) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>Phonebook</p>
      <div>
        name: <input onChange={(e) => setName(e.target.value)} value={name} />
      </div>
      <div>
        number:{" "}
        <input onChange={(e) => setNumber(e.target.value)} value={number} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
