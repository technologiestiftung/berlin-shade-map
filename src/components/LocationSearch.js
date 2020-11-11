/** @jsx jsx */
import React from "react";
import { jsx, Flex } from "theme-ui";
import styled from "styled-components";
import { useStoreActions } from "easy-peasy";
import { isMobile } from "react-device-detect";
import history from "../history";
import CardTitle from "./Card/CardTitle";

import c from "config";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;
  height: auto;
  width: 100%;
  margin-bottom: 10px;
  background: white;
`;

const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  input {
    outline: none;
    width: 100%;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid rgba(0, 0, 0, 0.75);
    margin: 5px 0 10px 0;
  }
`;

const ResultDiv = styled.div`
  display: flex;
  flex-direction: row;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: block;
  }
`;

const ResultElement = styled.li`
  list-style: none;
  display: block;
  width: 100%;
  margin: 0;
  padding: 10px;
  font-size: 0.8rem;
  cursor: pointer;
  box-sizing: border-box;
  &.even {
    background-color: rgba(217, 217, 217, 1);
  }
  &:hover,
  &.even:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const MAPBOX_TOKEN = process.env.REACT_APP_MAP_TOKEN;

const LocationSearch = p => {

  const setMapCenter = useStoreActions((action) => action.setMapCenter);
  const setMapZoom = useStoreActions((action) => action.setMapZoom);

  const [value, setValue] = React.useState("");
  const [results, setResults] = React.useState([]);

  const updateSearch = async e => {
    setValue(e.target.value);
    try {
      if (e.target.value.length >= 3) {
        const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?autocomplete=true&language=de&country=de&bbox=13.0824446341071,52.3281202651866,13.7682544186827,52.681600197973&access_token=${MAPBOX_TOKEN}`;
        const res = await fetch(geocodingUrl);
        if (res.ok) {
          const json = await res.json();
          setResults(json.features);
        } else {
          return;
        }
      }
    } catch (error) {
      console.error(error);
      return;
    }
  };

  const handleChange = e => {
    updateSearch(e).catch(console.error);
  };

  const handleResultClick = coordinates => {
    // collapse sidebar on mobile interaction
    if (isMobile) {
      history.push("/");
    }
    // reset search field and results
    setValue("");
    setResults([]);
    // update map
    setMapZoom(c.map.config.maxZoom);
    setMapCenter(coordinates);
  }
  return (
    <Flex
      sx={{
        width: "100%",
        flexWrap: "wrap",
        fontSize: "1",
        justifyContent: "column",
        mb: ["2", "4"],
      }}
    >
      <CardTitle>Standortsuche</CardTitle>
      <SearchDiv>
        <FlexRowDiv>
          <input
            type="text"
            placeholder="Adresse"
            value={value}
            onChange={handleChange}
          />
        </FlexRowDiv>
        <ResultDiv>
          <ul>
            {results.map((item, index) => (
              <ResultElement
                className={index % 2 ? "even" : "odd"}
                key={index}
                onClick={(e) => handleResultClick(item.geometry.coordinates)}
              >
                {item.place_name_de}
              </ResultElement>
            ))}
          </ul>
        </ResultDiv>
      </SearchDiv>
    </Flex>
  );
};

export default LocationSearch;