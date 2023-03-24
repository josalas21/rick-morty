// todo: loading animation/skeleton

import { useQuery } from "react-query";
import { getCharactersByPage } from "../../services/characters.services";
import CharacterCard from "../../components/characters/CharacterCard";

function CharactersList({ page }) {
  const { data: data, status } = useQuery(["characters", { page }], () =>
    getCharactersByPage(page)
  );

  switch (status) {
    case "loading":
      return <div>Loading...</div>;
    case "error":
      return <div>Error fetching posts: {error.message}</div>;
    case "success":
      const characters = data.results;
      return (
        <div class="bg-stone-800 text-white">
          <div class="container mx-auto flex flex-wrap justify-center gap-4 py-20">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </div>
      );
  }
}

export default CharactersList;
