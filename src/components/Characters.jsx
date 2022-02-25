import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    AOS.init();
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {characters.map((characters) => (
          <div className="col-md-3 py-3">
            <div className="card" data-aos="fade-down-right">
              <div className="card-header px-0 py-0">
                <img className="img-fluid" src={characters.image} />
              </div>
              <div className="card-body">
                <h5>{characters.name}</h5>
                <p>{characters.gender}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
