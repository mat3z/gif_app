import {
  REQUEST_GIFS,
  RECEIVE_GIFS,
  REQUEST_MORE_GIFS,
  RECEIVE_MORE_GIFS,
  CHANGE_OFFSET,
  SET_QUERY
} from "../actionTypes";

const API_KEY = 'SCY3KGuxrMBm0P04DdRWXr9CfBqQ1Wl4';

export const fetchGifs = (method='trending', query='', limit=25) => {
  return (dispatch, getState)=> {

    const api = method === 'trending' || method === 'search' && query === ''
      ? `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}`
      : `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${limit}&q=${query}`;

    dispatch(requestGifs());
    return fetch(api)
      .then(res => res.json())
      .then(res => {
        dispatch(setQuery(query));
        dispatch(receiveGifs(res.data))
      });
  }
};

export const fetchMoreGifs = (method='trending', limit=4) => {
  return (dispatch, getState) => {
    const offset = getState().gifs.gifs.items.length;
    const query = getState().gifs.query;
    const api = method === 'trending' || method === 'search' && query === ''
      ? `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}`
      : `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${limit}&q=${query}&offset=${offset}`;

    dispatch(requestMoreGifs());
    return fetch(api)
      .then(res => res.json())
      .then(res => {
        dispatch(changeOffset(offset));
        dispatch(receiveMoreGifs(res.data));
      })
  }
};

const requestGifs = () => ({
  type: REQUEST_GIFS
});

const receiveGifs = gifs => ({
  type: RECEIVE_GIFS,
  gifs
});

const requestMoreGifs = () => ({
  type: REQUEST_MORE_GIFS
});

const receiveMoreGifs = gifs => ({
  type: RECEIVE_MORE_GIFS,
  gifs
});

const changeOffset = offset => ({
  type: CHANGE_OFFSET,
  offset
});

const setQuery = query => ({
  type: SET_QUERY,
  query
});
