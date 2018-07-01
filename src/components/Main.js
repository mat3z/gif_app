import React from 'react';
import GifsListContainer from "../containers/GifsListContainer";
import SearchBar from '../containers/SearchBar';

const Main = () => (
  <div>
    <SearchBar />
    <GifsListContainer />
  </div>
);

export default Main;