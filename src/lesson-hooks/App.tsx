import { useEffect, useMemo } from "react";
import { useGetPokemons } from "./hooks/useGetPokemons";

const App = () => {
  const { getPokemons, handleNextPokemons, handlePreviousPokemons, pokemons } =
    useGetPokemons();
  // const [pokemonsUpperCased, setpokemonsUpperCased] = useState([]);

  const pokemonsUpperCased = useMemo(() => {
    return pokemons.map((pokemon) => {
      return { name: pokemon.name.toUpperCase() };
    });
  }, [pokemons]);

  // const pokemonsUpperCased = pokemons.map((pokemon) => {
  //   return { name: pokemon.name.toUpperCase() };
  // });

  useEffect(() => {
    getPokemons();
  }, []);

  // useEffect(() => {
  //   setpokemonsUpperCased(
  //     pokemons
  //       .map((pokemon) => {
  //         return { name: pokemon.name.toUpperCase() };
  //       })
  //       .reduce()
  //       .filter()
  //   );
  // }, [pokemons]);

  return (
    <div>
      <button onClick={handlePreviousPokemons}>Previous</button>
      <button onClick={handleNextPokemons}>Next</button>
      {pokemonsUpperCased.map((pokemon) => {
        return (
          <>
            <span key={pokemon.name}>{pokemon.name}</span> <br />
          </>
        );
      })}
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.name}>
            <h2>{pokemon.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default App;
