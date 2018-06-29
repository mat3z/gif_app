import React from 'react';
import { connect } from 'react-redux';

const DetailedGifPage = (props) => {
  if (!props.gifs) {
    return <div>NOTHING HERE</div>
  }
  const gif = props.gifs.find(gif => props.match.params.id === gif.id);

  console.log(gif);
  return (
    <div>
      <img
        src={gif.images.fixed_height.url}
        alt="gif"
        height='250px'
      />
      <h2>Title: {gif.title}</h2>
      <h2>Posted by: {gif.username}</h2>
      <h2>At: {gif.import_datetime}</h2>
      <h2>Rating: {gif.rating}</h2>
    </div>
  )
};

const mapStateToProps = (state) => ({
  gifs: state.gifs.gifs.items
});


export default connect(mapStateToProps)(DetailedGifPage);