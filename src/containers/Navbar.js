import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
  color: '#999999',
  textDecoration: 'none',
  border: '1px solid #999999',
  padding: '10px'
};

const Navbar = () => (
  <div
    style={{
      marginTop: '20px',
      marginBottom: '100px',
      display: 'flex',
      justifyContent: 'space-evenly',
      fontSize: '2em'
    }}
  >
    <Link to='/' style={{...linkStyle}}>Go to main page</Link>
    <Link to='/favourites' style={{...linkStyle}}>Go to favourites</Link>
  </div>
);

export default Navbar;