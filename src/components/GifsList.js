import React from 'react';
import GifItem from './GifItem';

const GifsList = ({ list }) => {
  const gifList = list
    .map(gif => (
      <GifItem
        key={gif.id}
        {...gif}
      />
    ));

  return (
    <div
      style={{
        display: 'flex',
        // height: '110vh',
        width: '70%',
        margin: '0 auto',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {gifList}
    </div>
  );
};

export default GifsList;