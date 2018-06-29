import React from 'react';
import GifItem from './GifItem';

const GifsList = ({ list }) => {
  const gifList = list
    // .map((gif, index) => {
    //   return index % 2 === 0 ? <GifItem key={gif.id} {...gif} /> : <div className="loader"></div>
    // });
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
        // flexDirection: 'column',
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