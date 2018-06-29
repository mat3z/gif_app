import {
  REQUEST_GIFS,
  RECEIVE_GIFS,
  REQUEST_MORE_GIFS,
  RECEIVE_MORE_GIFS,
  CHANGE_OFFSET,
  SET_QUERY
} from "../actionTypes";

const initialState = {
  gifs: {
    loading: false,
    items: []
  },
  offset: 0,
  query: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        ...state,
        gifs: {
          ...state.gifs,
          loading: true
        }
      };
    case RECEIVE_GIFS:
      return {
        ...state,
        gifs: {
          loading: false,
          items: [ ...action.gifs ]
        }
      };
    case REQUEST_MORE_GIFS:
      return {
        ...state,
        gifs: {
          loading: true,
          ...state.gifs
        }
      };
    case RECEIVE_MORE_GIFS:
      return {
        ...state,
        gifs: {
          loading: false,
          items: [ ...state.gifs.items, ...action.gifs]
        }
      };
    case CHANGE_OFFSET:
      return {
        ...state,
        offset: action.offset
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.query
      };
    default:
      return state;
  }
}