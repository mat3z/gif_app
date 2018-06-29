import {
  REQUEST_TRENDING_GIFS,
  RECEIVE_TRENDING_GIFS,
  REQUEST_MORE_GIFS,
  RECEIVE_MORE_GIFS,
  REQUEST_SEARCHED_GIFS,
  RECEIVE_SEARCHED_GIFS,
  CHANGE_OFFSET
} from "../actionTypes";

const initialState = {
  gifs: {
    loading: false,
    items: []
  },
  offset: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TRENDING_GIFS:
      return {
        ...state,
        gifs: {
          ...state.gifs,
          loading: true
        }
      };
    case RECEIVE_TRENDING_GIFS:
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
    case REQUEST_SEARCHED_GIFS:
      return {
        ...state,
        gifs: {
          ...state.gifs,
          loading: true
        }
      };
    case RECEIVE_SEARCHED_GIFS:
      return {
        ...state,
        gifs: {
          loading: false,
          items: [ ...action.gifs ]
        }
      };
    default:
      return state;
  }
}