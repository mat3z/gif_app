import React, { Component } from 'react';
import GifsList from '../components/GifsList';

class FavouritesPage extends Component {
  render() {
    const favouriteGifs = localStorage['favouriteGifs']
      ? JSON.parse(localStorage['favouriteGifs'])
      : [];

    if (!favouriteGifs) {
      return (
        <div>
          YOU DON'T HAVE ANY FAVOURITE GIFS
        </div>
      )
    }

    return (
      <div>
        <GifsList list={favouriteGifs} />
      </div>
    )
  }

}

export default FavouritesPage;