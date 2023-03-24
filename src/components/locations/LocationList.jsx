// todo: loading animation/skeleton

import { useQuery } from "react-query";
import { getLocationsByPage } from "../../services/characters.services";
import LocationCard from "../../components/locations/LocationCard";

function CharactersList({ page }) {
  const { data: data, status } = useQuery(["locations", { page }], () =>
    getLocationsByPage(page)
  );

  switch (status) {
    case "loading":
      return ;
    case "error":
      return <div>Error fetching posts: {error.message}</div>;
    case "success":
      const locations = data.results;
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
