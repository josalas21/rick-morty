// todo: pagination component with setPage

import { useState } from "react";
import CharactersList from "../../components/characters/CharacterList";

function CharactersPage() {
  const [page, setPage] = useState(1);

  return (
    <div class="bg-stone-800 text-white">
      <CharactersList page={page} />
    </div>
  );
}

export default CharactersPage;
