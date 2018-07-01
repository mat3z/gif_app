import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class GifItem extends Component {
  constructor(props) {
    super(props);
    this.toggleExpandGif = this.toggleExpandGif.bind(this);
    this.addToFavourites = this.addToFavourites.bind(this);
    this.removeFromFavourites = this.removeFromFavourites.bind(this);
    this.checkIfFavourite = this.checkIfFavourite.bind(this);
    this.state = {
      expandGif: false,
      isFavourite: this.checkIfFavourite(this.props.id)
    };
    this.isFavouritePage = window.location.pathname.slice(1) === 'favourites';
  }

  toggleExpandGif() {
    this.setState((prevState) => ({
      expandGif: !prevState.expandGif
    }))
  }

  addToFavourites(e) {
    let gifs = localStorage['favouriteGifs']
      ? JSON.parse(localStorage['favouriteGifs'])
      : [];

    gifs.push(this.props);
    let JSONgifs = JSON.stringify(gifs);
    localStorage.setItem('favouriteGifs', JSONgifs);
    this.setState((prevState) => ({
      isFavourite: !prevState.isFavourite
    }))
  }

  removeFromFavourites(e) {
    let gifs = JSON.parse(localStorage['favouriteGifs']);
    let smallerArr = gifs.filter(gif => gif.id !== this.props.id);
    let JSONgifs = JSON.stringify(smallerArr);
    localStorage.setItem('favouriteGifs', JSONgifs);
    this.setState((prevState) => ({
      isFavourite: !prevState.isFavourite
    }))
  }

  checkIfFavourite(id) {
    let gifs = localStorage['favouriteGifs']
      ? JSON.parse(localStorage['favouriteGifs'])
      : [];

    return gifs.filter(gif => gif.id === id).length;
  }

  render() {
    const { title, username, import_datetime, rating, id } = this.props;

    let detailsDiv = (
      <div className={`gifDetails`}>
        <strong>Title</strong>: {title}<br/>
        <strong>Posted by</strong>: {username}<br/>
        <strong>At</strong>: {import_datetime}<br/>
        <strong>Rating</strong>: {rating}<br/>
        { this.isFavouritePage
          ? <Button
              id={id}
              clb={this.removeFromFavourites}
              content={'Remove from favourites'}
            />
          : ( this.state.isFavourite
              ? <Button
                id={id}
                clb={this.removeFromFavourites}
                content={'Remove from favourites'}
              />
              : <Button
                id={id}
                clb={this.addToFavourites}
                content={'Add to favourites'}
              />
            )
        }
      </div>
    );

    return (
      <MediaQuery query="(min-device-width: 900px)">
        {(matches) => {
          const { images } = this.props;
          const properUrl = matches ? images.fixed_height.url : images.fixed_width.url;
          const gifStyle = matches ? {display: 'flex'} : {};
          const imgStyle = matches ? {} : {display: 'block', width: '100%', height: 'auto'};

          return (
            <div
              className='gifBox'
              style={{ ...gifStyle }}
            >
              <img
                src={properUrl}
                alt="gif"
                onClick={this.toggleExpandGif}
                style={{ ...imgStyle }}
              />
              {this.state.expandGif && detailsDiv}
            </div>
          )
        }}
      </MediaQuery>
    )
  }
}

const Button = ({id, clb, content}) => (
  <button
    style={{
      fontSize: '16px',
      padding: '5px',
      marginTop: '5px',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      outline: 'none',
      border: '1px solid black'
    }}
    name={id}
    onClick={clb}
  >
    {content}
  </button>
);

export default GifItem;