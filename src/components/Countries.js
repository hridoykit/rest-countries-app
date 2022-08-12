import React, { useEffect, useState } from "react";
import Country from "../components/Country/Country"


const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  });


  return (
    <div>
      <h1>REST COUNTRIES API</h1>
      <p>Total Length Of Countries: {countries.length}</p>
      <div>
        {countries.map(country => <h2>{country.name.common}</h2>)}
        {/* {countries.map(country => <Country country={country}></Country>)} */}
      </div>

    </div>
  );
};


export default Countries;
