import { REFRESH } from '../actions/Control';

const initialState = {
  refresh: 0
};

export default (state = initialState, action) => {

  switch(action.type) {

    case REFRESH: {
      return {...state, refresh: (state.refresh + 1)};
    }

    default:
      return state;
  }
}
