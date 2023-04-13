import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const products_reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };
    case GET_PRODUCTS_BEGIN:
      return { ...state, product_loading: true };
    case GET_PRODUCTS_SUCCESS:
      const featured_products = action.payload.filter(
        (item) => item.featured === true
      );
      return {
        ...state,
        products: action.payload,
        featured_products,
        product_loading: false,
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, product_error: true, product_loading: false };
    default:
      return state;
  }
};

export default products_reducer;
