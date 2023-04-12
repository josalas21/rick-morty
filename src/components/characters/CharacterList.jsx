import { Loader, Error, CharacterCard } from "../../components";

function CharacterList({ data, status, filteredName }) {
  const characters = data?.results;

  switch (status) {
    case "loading":
      return <Loader />;
    case "error":
      return <Error filteredName={filteredName} />;
    case "success":
      return (
        <div class="bg-[#EBEEF2] text-black">
          <div class="container mx-auto flex flex-wrap justify-center gap-4 py-4 md:py-10">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </div>
      );
  }
}
export default CharacterList;
