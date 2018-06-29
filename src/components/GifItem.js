import React from 'react';
import { Link } from 'react-router-dom';

const GifItem = (props) => (
  <div className='gifBox'>
    <Link to={`/details/${props.id}`}>
      <img
        src={props.images.fixed_height.url}
        alt="gif"
        height='150px'
      />
    </Link>
  </div>
);


export default GifItem;