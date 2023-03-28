import { useState } from "react";
import { useQuery } from "react-query";
import { getDataByPage, getFilteredDataByPage } from "../../services/services";
import { EpisodeList, Pagination, SearchBar } from "../../components";

function EpisodesPage() {
  const [page, setPage] = useState(1);
  const [filteredName, setFilteredName] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const section = "episode";

  const handleFilteredNames = (e) => {
    setPage(1);
    setFilteredName(e.target.value);
    filteredName == "" ? setIsFiltered(false) : setIsFiltered(true);
  };

  const { data: data, status } = isFiltered
    ? useQuery(["filtered locations", { page, filteredName }], () =>
        getFilteredDataByPage(section, page, filteredName)
      )
    : useQuery(["locations", { page }], () => getDataByPage(section, page));

  return (
    <div class="bg-stone-800 text-white">
      {console.log(filteredName, isFiltered)}
      <SearchBar
        handleFilteredNames={handleFilteredNames}
        items={data?.info.count}
      />
      <EpisodeList
        page={page}
        data={data}
        status={status}
        filteredName={filteredName}
      />
      <Pagination setPage={setPage} page={page} max={data?.info.pages} />
    </div>
  );
}

export default EpisodesPage;
