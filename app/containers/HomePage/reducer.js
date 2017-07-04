import { fromJS } from 'immutable';

import {
  LOAD_ZONES_SUCCESS,
} from './constants';

export const initialState = fromJS({
  homePage: [],
  zones: [],
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ZONES_SUCCESS:
      return state.set('zones', fromJS(action.zones));
    default:
      return state;
  }
};

export default appReducer;
