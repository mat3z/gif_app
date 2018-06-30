import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { configureStore } from "./store";
import FavouritesPage from './containers/FavouritesPage';
import Navbar from './containers/Navbar';
import Main from './components/Main';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar/>
        <Route
          path='/favourites'
          component={FavouritesPage}
        />
        <Route
          exact path='/'
          component={Main}
        />
      </div>
    </Router>
  </Provider>
);

export default App;
