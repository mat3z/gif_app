import {
  REQUEST_TRENDING_GIFS,
  RECEIVE_TRENDING_GIFS,
  REQUEST_MORE_GIFS,
  RECEIVE_MORE_GIFS,
  REQUEST_SEARCHED_GIFS,
  RECEIVE_SEARCHED_GIFS,
  CHANGE_OFFSET
} from "../actionTypes";

const BASE_URL_TRENDING = 'http://api.giphy.com/v1/gifs/trending?';
const BASE_URL_SEARCH = 'http://api.giphy.com/v1/gifs/search?';
const API_KEY = 'SCY3KGuxrMBm0P04DdRWXr9CfBqQ1Wl4';
const API_TRENDING_URL = `${BASE_URL_TRENDING}api_key=${API_KEY}`;
const API_SEARCH_URL = `${BASE_URL_SEARCH}api_key=${API_KEY}`;

const requestTrendingGifs = () => ({
  type: REQUEST_TRENDING_GIFS
});

const receiveTrendingGifs = gifs => ({
  type: RECEIVE_TRENDING_GIFS,
  gifs
});

export const fetchTrendingGifs = () => {
  const limit = 25;
  const api = `${API_TRENDING_URL}&limit=${limit}`;

  return dispatch => {
    dispatch(requestTrendingGifs());
    return fetch(api)
      .then(res => res.json())
      .then(res => dispatch(receiveTrendingGifs(res.data)));
  }
};

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

export const fetchMoreGifs = () => {
  const limit = 4;
  return (dispatch, getState) => {
    const offset = getState().gifs.gifs.items.length;
    const api = `${API_TRENDING_URL}&limit=${limit}&offset=${offset}`;
    dispatch(requestMoreGifs());
    return fetch(api)
      .then(res => res.json())
      .then(res => {
        dispatch(changeOffset(offset));
        dispatch(receiveMoreGifs(res.data));
      })
  }
};

const requestSearchedGifs = () => ({
  type: REQUEST_SEARCHED_GIFS
});

const receiveSearchedGifs = gifs => ({
  type: RECEIVE_SEARCHED_GIFS,
  gifs
});

export const fetchSearchedGifs = query => {
  const limit = 25;
  const api = `${API_SEARCH_URL}&limit=${limit}&q=${query}`;

  return dispatch => {
    dispatch(requestSearchedGifs());
    return fetch(api)
      .then(res => res.json())
      .then(res => dispatch(receiveSearchedGifs(res.data)));
  }
};