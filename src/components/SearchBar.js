import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchedGifs, fetchTrendingGifs } from '../store/actions/gifs';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.timeout = null;
  }

  fetchGifs = text => text.length ? this.props.fetchSearchedGifs(text) : this.props.fetchTrendingGifs();

  handleChange = e => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.fetchGifs.bind(this, e.target.value), 2000)
    // this.timeout = setTimeout(this.props.fetchSearchedGifs.bind(this, e.target.value), 2000)
  };

  render() {
    return (
      <div style={{
        margin: '100px auto',
        textAlign: 'center'
      }}>
        <form>
          <input
            type="text"
            placeholder="Search for gifs..."
            name="gifName"
            onChange={this.handleChange}
            style={{
              fontSize: '40px',
              padding: '10px',
              textAlign: 'center',
              boxShadow: '0px 0px 8px 4px rgba(136,136,136,1)'
            }}
          />
        </form>
      </div>
    );
  }
}

export default connect(null, { fetchSearchedGifs, fetchTrendingGifs })(SearchBar);