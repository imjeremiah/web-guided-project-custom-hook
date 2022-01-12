const getPokemon = (id, setSelectedPokemon) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => {
          setSelectedPokemon(res.data);
        });
}

export default getPokemon;