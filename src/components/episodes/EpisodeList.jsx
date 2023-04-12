import { EpisodeCard, Error, Loader } from "../../components";

function CharactersList({ data, status, filteredName }) {
  const episodes = data?.results;

  switch (status) {
    case "loading":
      return <Loader />;
    case "error":
      return <Error filteredName={filteredName} />;
    case "success":
      return (
        <div className="bg-[#EBEEF2]">
          <div className="container mx-auto flex flex-wrap justify-center gap-4 py-4 md:py-10">
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      );
  }
}

export default CharactersList;
