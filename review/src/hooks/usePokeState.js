import { useState, useEffect } from 'react';

import getPokemen from '../services/getPokemen';
import getPokemon from '../services/getPokemon';

const usePokeState = () => {
    const [pokemen, setPokemen] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState({});
  
    useEffect(() => {
      setPokemen(getPokemen());
    }, []);
  
    const handlePoke = (id) => {
      getPokemon(id, setSelectedPokemon);
    };
  
    return [selectedPokemon, pokemen, handlePoke];
}

export default usePokeState;