import { useState } from "react";
import { useQuery } from "react-query";
import { getDataByPage, getFilteredDataByPage } from "../../services/services";
import { SearchBar, CharacterList, Pagination } from "../../components";

function CharactersPage() {
  const [page, setPage] = useState(1);
  const [filteredName, setFilteredName] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const section = "character";

  const handleFilteredNames = (e) => {
    setPage(1);
    setFilteredName(e.target.value);
    filteredName === "" ? setIsFiltered(false) : setIsFiltered(true);
  };

  const { data: data, status } = isFiltered
    ? useQuery(["filtered characters", { page, filteredName }], () =>
        getFilteredDataByPage(section, page, filteredName)
      )
    : useQuery(["characters", { page }], () => getDataByPage(section, page));

  return (
    <div>
      <SearchBar
        handleFilteredNames={handleFilteredNames}
        items={data?.info.count}
      />
      <CharacterList
        page={page}
        data={data}
        status={status}
        filteredName={filteredName}
      />
      <Pagination setPage={setPage} page={page} max={data?.info.pages} />
    </div>
  );
}

export default CharactersPage;
