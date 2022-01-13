import React from "react";
import Pokemon from "./Pokemon";

const PokeDex = (props) => {

    const { pokemen, handlePoke } = props;

    return (
        <div id="pokeList">
        {pokemen.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.id} handlePoke={handlePoke} />
        ))}
      </div>
    );
}

export default PokeDex;