import clone        from 'clone';
import assign       from 'object-assign';
import {
  INPUT_BUDGET,
  CHOOSE_EVENT,
  CHOOSE_DRESS_SIZE,
  CHOOSE_PANT_SIZE,
  CHOOSE_COLOR,
  BUDGET,
  EVENT,
  DRESS_SIZE,
  PANT_SIZE,
  COLOR,
  CLOSING
} from '../constants/Home';

const initialState = {
  loading: false,
  budget: 0,
  event: null,
  dress_size: 0,
  pant_size: 1,
  color: null,
  step: BUDGET
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
  case INPUT_BUDGET:
    return assign({}, state, {
      step: EVENT,
      budget: action.data,
    });

  case CHOOSE_EVENT:
    return assign({}, state, {
      step: DRESS_SIZE,
      budget: action.data,
    });

  case CHOOSE_DRESS_SIZE:
    return assign({}, state, {
      step: PANT_SIZE,
      budget: action.data,
    });

  case CHOOSE_PANT_SIZE:
    return assign({}, state, {
      step: COLOR,
      budget: action.data,
    });

  case CHOOSE_COLOR:
    return assign({}, state, {
      step: CLOSING,
      budget: action.data,
    });

  default:
    return state;
  }
}
