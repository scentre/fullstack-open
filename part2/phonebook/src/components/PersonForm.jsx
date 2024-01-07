const PersonForm = ({ handleSubmit, setName, setNumber, name, number }) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>Phonebook</p>
      <div>
        name:{" "}
        <input
          onChange={(e) => {
            const trimmed = e.target.value.replace(/\s{2,}$/, "");
            setName(trimmed);
          }}
          value={name}
        />
      </div>
      <div>
        number:{" "}
        <input
          onChange={(e) => {
            const trimmed = e.target.value.replace(/\s{2,}$/, "");

            setNumber(trimmed);
          }}
          value={number}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
