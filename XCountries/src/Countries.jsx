import { useEffect, useState } from "react";

const CountryCard = ({ name, flagImg, altText }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "200px",
        border: "2px solid black",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        gap: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={flagImg}
        alt={altText}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <h2>{name}</h2>
    </div>
  );
};

function Countries() {
  const API_URL = "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching data: ", error.message));
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {countries.map((country) => (
          <CountryCard
            key={country.abbr}
            name={country.name}
            flagImg={country.flag}
            altText={country.abbr}
          />
        ))}
      </div>
    </>
  );
}

export default Countries;
