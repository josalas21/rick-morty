import { useState } from "react";
import { useQuery } from "react-query";
import { getDataByPage, getFilteredDataByPage } from "../../services/services";
import { LocationList, Pagination, SearchBar } from "../../components";

function LocationsPage() {
  const [page, setPage] = useState(1);
  const [filteredName, setFilteredName] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const section = "location";

  const handleFilteredNames = (e) => {
    setPage(1);
    setFilteredName(e.target.value);
    filteredName === "" ? setIsFiltered(false) : setIsFiltered(true);
  };

  const { data: data, status } = isFiltered
    ? useQuery(["filtered locations", { page, filteredName }], () =>
        getFilteredDataByPage(section, page, filteredName)
      )
    : useQuery(["locations", { page }], () => getDataByPage(section, page));

  return (
    <div>
      <SearchBar
        handleFilteredNames={handleFilteredNames}
        items={data?.info.count}
      />
      <LocationList
        page={page}
        data={data}
        status={status}
        filteredName={filteredName}
      />
      <Pagination setPage={setPage} page={page} max={data?.info.pages} />
    </div>
  );
}

export default LocationsPage;
