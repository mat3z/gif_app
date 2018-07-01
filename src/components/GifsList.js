import React from 'react';
import GifItem from './GifItem';
import MediaQuery from 'react-responsive';

const listStyleBig = {
  display: 'flex',
  width: '70%',
  margin: '0 auto',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const listStyleSmall = {
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  margin: '0 10%'
};


const GifsList = ({ list }) => {
  const gifList = list
    .map(gif => (
      <GifItem
        key={gif.id}
        {...gif}
      />
    ));

  return (
    <MediaQuery query="(min-device-width: 1224px)">
      {(matches) => {
          let listStyle = matches ? listStyleBig : listStyleSmall;

          return (
            <div style={{ ...listStyle }}>
              {gifList}
            </div>
          )
        }
      }
    </MediaQuery>
  );
};

export default GifsList;