import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { configureStore } from "./store";
import FavouritesPage from './components/FavouritesPage';
import Navbar from './components/Navbar';
import Main from './components/Main';
import TopButton from './components/TopButton'


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar/>
        <Route
          path='/gif_app/favourites'
          component={FavouritesPage}
        />
        <Route
          exact path='/gif_app/'
          component={Main}
        />
        <TopButton />
      </div>
    </Router>
  </Provider>
);

export default App;
