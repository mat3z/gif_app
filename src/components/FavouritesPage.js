import React, { Component } from 'react';
import GifsList from './GifsList';

class FavouritesPage extends Component {
  render() {
    const favouriteGifs = localStorage['favouriteGifs']
      ? JSON.parse(localStorage['favouriteGifs'])
      : [];

    if (!favouriteGifs.length) {
      return (
        <div>
          <h1
            style={{
              color: 'grey',
              textAlign: 'center',
              marginTop: '100px'
            }}
          >
            YOU DON'T HAVE ANY FAVOURITE GIFS
          </h1>
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