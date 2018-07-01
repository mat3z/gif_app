import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const linkStyleDefault = {
  color: '#999999',
  textDecoration: 'none',
  border: '1px solid #999999',
};

const linkStyleBig = {
  ...linkStyleDefault,
  padding: '10px'
};

const linkStyleSmall = {
  ...linkStyleDefault,
  padding: '5px',
  fontSize: '0.7em',
  textAlign: 'center'
};

const Navbar = () => (
  <MediaQuery query="(min-device-width: 900px)">
    {(matches) => {
        let linkStyle = matches ? linkStyleBig : linkStyleSmall;
        return (
          <div
            style={{
              marginTop: '20px',
              marginBottom: '50px',
              display: 'flex',
              justifyContent: 'space-evenly',
              fontSize: '2em'
            }}
          >
            <Link to='/gif_app' style={{...linkStyle}}>TRENDING</Link>
            <Link to='/gif_app/favourites' style={{...linkStyle}}>FAVOURITES</Link>
          </div>
        )
      }
    }
  </MediaQuery>
);

export default Navbar;