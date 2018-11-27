import { FETCH_POSTS, NEW_POST,UPDATE_POST } from "../actions/types";
const initialState = {
  items: [],
  item: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("postreducer");
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case UPDATE_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
