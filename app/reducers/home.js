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
  budget: -1,
  event: -1,
  dress_size: -1,
  pant_size: -1,
  color: -1,
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
      event: action.data,
    });

  case CHOOSE_DRESS_SIZE:
    return assign({}, state, {
      step: PANT_SIZE,
      dress_size: action.data,
    });

  case CHOOSE_PANT_SIZE:
    return assign({}, state, {
      step: COLOR,
      pant_size: action.data,
    });

  case CHOOSE_COLOR:
    return assign({}, state, {
      step: CLOSING,
      color: action.data,
      loading: true
    });

  default:
    return state;
  }
}
