import React, { useState, useEffect} from "react";
import Search from "../components/Search";
import ResultsCard from "../components/ResultsCard";

const SearchCharacters = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [characters, setCharacters] = useState([]);
  let [search, setSearch] = useState("");
  let { results } = characters;

  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(url).then((res) => res.json());
      setCharacters(data);
      
    })();
  }, [url]);

  return (
    <>
      {" "}
      <Search
        updatePageNumber={updatePageNumber}
        setSearch={setSearch}
      />
      <ResultsCard characters={results} search={search} />
    </>
  );
};

export default SearchCharacters;
