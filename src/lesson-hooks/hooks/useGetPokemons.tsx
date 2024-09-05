import { useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);

  const handlePreviousPokemons = async () => {
    const newOffset = offset - 20;
    setOffset(newOffset);
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${newOffset}&limit=20`
    );
    const data = await result.json();
    setPokemons(data.results);
  };

  const handleNextPokemons = async () => {
    const newOffset = offset + 20;
    setOffset(newOffset);
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${newOffset}&limit=20`
    );
    const data = await result.json();
    setPokemons(data.results);
  };

  const getPokemons = async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
    const data = await result.json();
    setPokemons(data.results);
  };

  return { pokemons, handlePreviousPokemons, handleNextPokemons, getPokemons };
};
