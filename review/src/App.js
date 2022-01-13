import React from "react";
import "./styles.scss";

import SelectedPokemon from './components/SelectedPokemon';
import PokeDex from "./components/PokeDex";
import usePokeState from "./hooks/usePokeState";

function App() {
  const [pokemen, selectedPokemon, handlePoke] = usePokeState();
  return (
    <div className="App">
      <SelectedPokemon selectedPokemon={selectedPokemon} />
      <PokeDex pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;
