const Filter = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default Filter;
