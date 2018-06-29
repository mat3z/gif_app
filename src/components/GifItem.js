import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

class GifItem extends Component {
  constructor(props) {
    super(props);
    this.toggleExpandGif = this.toggleExpandGif.bind(this);
    this.addToFavourites = this.addToFavourites.bind(this);
    this.state = {
      expandGif: false
    };
  }

  toggleExpandGif() {
    this.setState((prevState) => ({
      expandGif: !prevState.expandGif
    }))
  }

  addToFavourites(e) {
    console.log(e.target.name)
  }

  render() {
    let detailsDiv = (
      <div className={`gifDetails`}>
        <strong>Title</strong>: {this.props.title}<br/>
        <strong>Posted by</strong>: {this.props.username}<br/>
        <strong>At</strong>: {this.props.import_datetime}<br/>
        <strong>Rating</strong>: {this.props.rating}<br/>

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
          name={this.props.id}
          onClick={this.addToFavourites}
        >Add to favourites</button>
      </div>
    );

    return (
      <div
        className='gifBox'
        style={{
          display: 'flex'
        }}
      >
        <img
          src={this.props.images.fixed_height.url}
          alt="gif"
          height='150px'
          onClick={this.toggleExpandGif}
        />
        {this.state.expandGif && detailsDiv}

      </div>
    )
  }
}

export default GifItem;