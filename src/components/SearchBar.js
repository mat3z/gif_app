import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGifs } from '../store/actions/gifs';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.timeout = null;
  }

  handleChange = e => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.props.fetchGifs.bind(this, 'search', e.target.value), 2000)
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div style={{
        margin: '100px auto',
        textAlign: 'center'
      }}>
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            placeholder="Search for gifs..."
            name="gifName"
            onChange={this.handleChange}
            style={{
              fontSize: '40px',
              fontColor: '#111111',
              padding: '10px',
              textAlign: 'center',
              boxShadow: '0px 0px 8px 4px rgba(136,136,136,1)',
              backgroundColor: '#999999',
              outline: 'none',
              border: 'none'
            }}
            autoComplete="off"
          />
        </form>
      </div>
    );
  }
}

export default connect(null, { fetchGifs })(SearchBar);