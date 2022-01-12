import React, { useState, useEffect } from "react";
import "./styles.scss";

import SelectedPoke from './components/SelectedPoke';
import PokeList from './components/PokeList';

import getPokemen from './services/getPokemen';
import getPokemon from './services/getPokemon';


const usePokeState = () => {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(getPokemen());
  }, []);

  const handlePoke = (id) => {
    getPokemon(id, setSelectedPokemon);
  };

  console.log("Finished hook");
  return [selectedPokemon, pokemen, handlePoke];
}

function App() {
  console.log("Start compliation");
  const [selectedPokemon, pokemen, handlePoke] = usePokeState();
  
  console.log("Rendering");
  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon}/>
      <PokeList pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;