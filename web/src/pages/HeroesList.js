import React, { useState, useEffect } from "react";
import { getHeroes } from "../services/api";
import HeroCard from "../components/HeroCard";

 // join the styles into a index and export to use here
import "../styles/global.css";

const HeroesList = () => {
    const [heroes, setHeroes] = useState([]);
    const [visibleHeroes, setVisibleHeroes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        getHeroes()
            .then((data) => setHeroes(data.data))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    const fetchNextHero = () => {
        if (visibleHeroes?.length < heroes?.length) {
            setVisibleHeroes([...visibleHeroes, heroes[visibleHeroes?.length]]);
        }
    };

    return (
        <div className="App">
            <h2>Heroes</h2>
            {error && <p className="error">{error}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <button onClick={fetchNextHero} disabled={visibleHeroes?.length >= heroes?.length}>
                    Fetch
                </button>
            )}
            <div className="heroesContainer">
                {visibleHeroes?.map((hero, index) => (
                    <HeroCard key={index} hero={hero} />
                ))}
            </div>
        </div>
    );
};

export default HeroesList;
