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
        <div className="bg-[#EBEEF2]">
          <div className="container mx-auto flex flex-wrap justify-center gap-4 py-4 md:py-10">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      );
  }
}

export default CharactersList;
