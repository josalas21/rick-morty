import { useState } from "react";
import CharactersList from "../../components/characters/CharacterList";
import Pagination from "../../components/pagination/Pagination";

function CharactersPage() {
  const [page, setPage] = useState(1);

  return (
    <div class="bg-stone-800 text-white">
      <Pagination setPage={setPage} page={page} max={42} />
      <CharactersList page={page} />
    </div>
  );
}

export default CharactersPage;
