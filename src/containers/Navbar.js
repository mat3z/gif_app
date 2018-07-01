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
  <MediaQuery query="(min-device-width: 1224px)">
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
            <Link to='/' style={{...linkStyle}}>Go to main page</Link>
            <Link to='/favourites' style={{...linkStyle}}>Go to favourites</Link>
          </div>
        )
      }
    }
  </MediaQuery>
);

export default Navbar;