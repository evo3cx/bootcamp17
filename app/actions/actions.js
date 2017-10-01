import {
  TOGGLE_COLOR,
  EXAMPLE_REQUEST_START,
  EXAMPLE_REQUEST_DATA,
} from '../constants/Constants';
import {
  INPUT_BUDGET,
  CHOOSE_EVENT,
  CHOOSE_DRESS_SIZE,
  CHOOSE_PANT_SIZE,
  CHOOSE_COLOR
} from '../constants/Home';
import {
  exampleRequest,
} from '../requester';

/** Toggle the hello world color */
export function toggleColor() {
  return { type: TOGGLE_COLOR };
}

/** An example async action using the request module */
export function exampleAsync() {
  return dispatch => {
    dispatch({ type: EXAMPLE_REQUEST_START });
    exampleRequest().then(data => {
      dispatch({ type: EXAMPLE_REQUEST_DATA, data: data });
    });
  };
}

/** Home action list */
export function inputBudget(budget){
  return { type: INPUT_BUDGET, data: budget };
}

export function chooseEvent(event){
  return { type: CHOOSE_EVENT, data: event };
}

export function chooseDressSize(size){
  return { type: CHOOSE_DRESS_SIZE, data: size };
}

export function choosePantSize(size){
  return { type: CHOOSE_PANT_SIZE, data: size };
}

export function chooseColor(color){
  return { type: CHOOSE_COLOR, data: color };
}