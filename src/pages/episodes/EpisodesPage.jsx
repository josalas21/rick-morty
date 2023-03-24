import { useState } from "react";
import EpisodeList from "../../components/episodes/EpisodeList";
import Pagination from "../../components/pagination/Pagination";

function EpisodesPage() {
  const [page, setPage] = useState(1);

  return (
    <div class="bg-stone-800 text-white">
      <Pagination setPage={setPage} page={page} max={3} />
      <EpisodeList page={page} />
    </div>
  );
}

export default EpisodesPage;

