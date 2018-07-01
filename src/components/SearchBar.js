import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGifs } from '../store/actions/gifs';
import MediaQuery from 'react-responsive';

const barStyle = {
  margin: '0px auto 60px',
  fontColor: '#111111',
  textAlign: 'center',
  boxShadow: '0px 0px 8px 4px rgba(136,136,136,1)',
  backgroundColor: '#999999',
  outline: 'none',
  border: 'none'
};

const barStyleSmall = {
  ...barStyle,
  fontSize: '20px',
  padding: '5px'
};

const barStyleBig = {
  ...barStyle,
  fontSize: '40px',
  padding: '10px'
};

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
      <MediaQuery query="(min-device-width: 1224px)">
        {(matches) => {
            let bar = matches ? barStyleBig: barStyleSmall;

            return (
              <div style={{textAlign: 'center'}}>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search for gifs..."
                    name="gifName"
                    onChange={this.handleChange}
                    style={{...bar}}
                    autoComplete="off"
                  />
                </form>
              </div>
            )
          }
        }
      </MediaQuery>
    );
  }
}

export default connect(null, { fetchGifs })(SearchBar);