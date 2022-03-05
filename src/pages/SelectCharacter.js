import React, { useState, useEffect } from "react";
import ResultsCard from "../components/ResultsCard";
import Select from "../components/Select";

const SelectCharacter = () => {
  let [episodes, setEpisodes] = useState([]);
  let [info, setInfo] = useState([]);

  let [select, setSelect] = useState("");
  let { results } = info;

  let url = `https://rickandmortyapi.com/api/character`;
  let searchUrl = `https://rickandmortyapi.com/api/character/?name=${select}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(url).then((res) => res.json());
      setInfo(data);
    })();
  }, [url]);

  const onChange = async (e) => {
    setSelect(e.target.value);
    let data = await fetch(searchUrl).then((res) => res.json());
    setEpisodes(data.results);
  };

  return (
    <div>
      <Select info={results} onChange={onChange} />
      <ResultsCard characters={select ? episodes : results} info={info} />
    </div>
  );
};

export default SelectCharacter;
