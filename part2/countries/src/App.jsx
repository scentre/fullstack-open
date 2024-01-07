import axios from "axios";

import { useState } from "react";
function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState([]);

  const onSearch = (e) => {
    setCountry(e.target.value);
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((result) => {
        let finalData = result.data.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
        setCountryData(finalData.length < 10 ? finalData : []);
      })
      .catch((err) => console.log(err));
  };

  console.log(countryData[0]);
  return (
    <>
      <div>
        <div>
          find countries{" "}
          <input type="text" value={country} onChange={onSearch} />
        </div>
      </div>

      <div>
        {countryData && countryData?.length == 0 ? (
          "Too many matches, specify another filter"
        ) : countryData && countryData?.length == 1 ? (
          <>
            <h1>{countryData[0]?.name.common}</h1>

            <p>capital {countryData[0]?.capital} </p>
            <p>area {countryData[0]?.area} </p>
            <p>
              languages:{" "}
              {Object.values(countryData[0]?.languages).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </p>

            <img src={countryData[0]?.flags.png} height={150} />
          </>
        ) : (
          countryData &&
          countryData?.map((each) => (
            <div key={each.name.common}>{each.name.common}</div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
