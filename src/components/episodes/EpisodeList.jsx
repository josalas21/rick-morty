// todo: loading animation/skeleton

import { useQuery } from "react-query";
import { getEpisodesByPage } from "../../services/services";
import EpisodeCard from "../../components/episodes/EpisodeCard";

function CharactersList({ page }) {
  const { data: data, status } = useQuery(["episodes", { page }], () =>
    getEpisodesByPage(page)
  );

  switch (status) {
    case "loading":
      return ;
    case "error":
      return <div>Error fetching posts: {error.message}</div>;
    case "success":
      const episodes = data.results;
      return (
        <div class="bg-stone-800 text-white">
          <div class="container mx-auto flex flex-wrap justify-center gap-4 py-10">
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      );
  }
}

export default CharactersList;
