import { SET_PRODUCT_DETAILS, SET_LOADING, SET_ERROR  } from "./product";
const initialState = {
  product: null,
  loading: true,
  error: '',
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_DETAILS:
      return {
        ...state,
        product: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
