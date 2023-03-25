import { useState } from "react";
import CharactersList from "../../components/characters/CharacterList";
import SearchBar from "../../components/search/SearchBar";
import Pagination from "../../components/pagination/Pagination";

function CharactersPage() {
  const [page, setPage] = useState(1);

  return (
    <div class="bg-stone-800 text-white">
      <SearchBar />
      <CharactersList page={page} />
      <Pagination setPage={setPage} page={page} max={42} />
    </div>
  );
}

export default CharactersPage;
