import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { configureStore } from "./store";
import SearchBar from './components/SearchBar';
import GifsListContainer from './containers/GifsListContainer';
import DetailedGifPage from "./components/DetailedGifPage";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <SearchBar/>
        <Route
          // name='/details/:id'
          path='/details/:id'
          component={DetailedGifPage}
        />
        <Route
          exact path='/'
          component={GifsListContainer}
        />
      </div>
    </Router>
  </Provider>
);

export default App;
