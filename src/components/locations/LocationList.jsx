import { Error, Loader, LocationCard } from "../../components";

function CharactersList({ data, status, filteredName }) {
  const locations = data?.results;
  
  switch (status) {
    case "loading":
      return <Loader />;
    case "error":
      return <Error filteredName={filteredName} />;
    case "success":
      return (
        <div class="bg-stone-800 text-white">
          <div class="container mx-auto flex flex-wrap justify-center gap-4 py-10">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      );
  }
}

export default CharactersList;
