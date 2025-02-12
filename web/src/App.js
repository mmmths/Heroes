import "./App.css";
import React, { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_ENDPOINT;

// const API_URL = "http://localhost:4000/heroes";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [visibleHeroes, setVisibleHeroes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => setHeroes(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const fetchNextHero = () => {
    if (visibleHeroes.length < heroes.length) {
      setVisibleHeroes([...visibleHeroes, heroes[visibleHeroes.length]]);
    }
  };

  return (
    <div className="App">
      <h2>Heroes</h2>
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={fetchNextHero} disabled={visibleHeroes.length >= heroes.length}>
          Fetch
        </button>
      )}
      <div className="heroesContainer">
        {visibleHeroes.map((hero, index) => (
          <div key={index} className="hero-card">
            <img src={hero.image} alt={hero.name} className="heroAvatar" />
            <h3>{hero.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
