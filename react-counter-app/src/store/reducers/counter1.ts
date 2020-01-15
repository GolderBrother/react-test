import * as TYPES from "../actionsTypes/index";
export const initialState = {
  number: 0
};
export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.INCREMENT1:
      return {
        number: state.number + 1
      };
    case TYPES.DECREMENT1:
      return {
        number: state.number - 1
      };
    default:
      return initialState;
  }
}
