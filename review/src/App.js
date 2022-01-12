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


}

function App() {
  const [selectedPokemon, pokemen, ]
  
  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon}/>
      <PokeList pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;