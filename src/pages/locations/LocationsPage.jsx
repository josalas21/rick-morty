import { useState } from "react";
import LocationList from "../../components/locations/LocationList";
import Pagination from "../../components/pagination/Pagination";

function LocationsPage() {
  const [page, setPage] = useState(1);

  return (
    <div class="bg-stone-800 text-white">
      <Pagination setPage={setPage} page={page} max={7} />
      <LocationList page={page} />
    </div>
  );
}

export default LocationsPage;
