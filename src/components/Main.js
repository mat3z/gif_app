import React from 'react';
import GifsListContainer from "../containers/GifsListContainer";
import SearchBar from '../components/SearchBar';

const Main = () => (
  <div>
    <SearchBar />
    <GifsListContainer />
  </div>
);

export default Main;