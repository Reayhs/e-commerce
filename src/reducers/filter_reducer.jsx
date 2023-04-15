import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    case SET_GRIDVIEW:
      return { ...state, grid_view: true };
    case SET_LISTVIEW:
      return { ...state, grid_view: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      let { sort, filtered_products } = state;
      if (sort === "price-lowest") {
        filtered_products = filtered_products.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        filtered_products = filtered_products.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        filtered_products = filtered_products.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === "name-z") {
        filtered_products = filtered_products.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return { ...state, filtered_products };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, category, company, color, price, shipping } = state.filters;
      let tempProduct = [...all_products];

      if (text) {
        tempProduct = tempProduct.filter((product) => {
          return product.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempProduct = tempProduct.filter(
          (product) => product.category === category
        );
      }
      if (company !== "all") {
        tempProduct = tempProduct.filter(
          (product) => product.company === company
        );
      }

      if (color !== "all") {
        tempProduct = tempProduct.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }

      //price
      tempProduct = tempProduct.filter((product) => product.price <= price);

      if (shipping) {
        tempProduct = tempProduct.filter(
          (product) => product.shipping === true
        );
      }
      return { ...state, filtered_products: tempProduct };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };
    //
    default:
      return state;
  }
};

export default filter_reducer;
