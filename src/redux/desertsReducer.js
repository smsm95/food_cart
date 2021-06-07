import axios from "axios";
const { REACT_APP_SPOONACULAR_API_KEY: apiKey } = process.env;

// Constants
const FETCH_DESERTS_SUCCESS = "FETCH_DESERTS_SUCCESS";
const FETCH_DESERTS_FAIL = "FETCH_DESERTS_FAIL";
const ADD_FILTER = "ADD_FILTER";
const REMOVE_FILTER = "REMOVE_FILTER";
const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const INCEREMENT_CART_QUANTITY = "INCREMENT_CART_QUANTITY";
const DECREMENT_CART_QUANTITY = "DECREMENT_CART_QUANTITY";
const REMOVE_LAST_ITEM_FROM_CART = "REMOVE_LAST_ITEM_FROM_CART";
const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
const COMPLETE_PAYMENT = "COMPLETE_PAYMENT";

// Initial state
const INITIAL_STATE = {
  deserts: [],
  itemsInCart: [],
  totalItemsInCart: 0,
  error: null,
};

// Reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DESERTS_SUCCESS:
      return {
        ...state,
        deserts: action.payload,
      };

    case FETCH_DESERTS_FAIL:
      return { ...state, error: action.payload };

    case ADD_FILTER:
      return { ...state, filters: [...state.filters, action.payload] };

    case REMOVE_FILTER:
      return {
        ...state,
        filters: [...state.filters].filter(
          (filter) => filter !== action.payload
        ),
      };

    case ADD_ITEM_TO_CART:
      const deserts = [...state.deserts];
      const selectedItem = deserts.find(
        (desert) => desert.id === action.payload.id
      );
      selectedItem.inCart = true;
      selectedItem.quantity = 1;
      return {
        ...state,
        deserts,
        itemsInCart: [...state.itemsInCart, action.payload],
        totalItemsInCart: state.totalItemsInCart + 1,
      };

    case INCEREMENT_CART_QUANTITY:
      const desertsToIcrement = [...state.deserts];
      const itemToIncrement = desertsToIcrement.find(
        (desert) => desert.id === action.payload.id
      );
      itemToIncrement.quantity += 1;
      return {
        ...state,
        deserts: desertsToIcrement,
        totalItemsInCart: state.totalItemsInCart + 1,
      };

    case DECREMENT_CART_QUANTITY:
      const desertsToDecrement = [...state.deserts];
      const itemToDecrement = desertsToDecrement.find(
        (desert) => desert.id === action.payload.id
      );
      itemToDecrement.quantity -= 1;
      return {
        ...state,
        deserts: desertsToDecrement,
        totalItemsInCart: state.totalItemsInCart - 1,
      };

    case REMOVE_LAST_ITEM_FROM_CART:
      const itemToRemove = [...state.deserts].indexOf(action.payload);
      const cartItems = [...state.itemsInCart];
      const desertsToUpdate = [...state.deserts];
      desertsToUpdate[itemToRemove] = {
        ...desertsToUpdate[itemToRemove],
        inCart: false,
        quantity: 0,
      };
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        deserts: desertsToUpdate,
        itemsInCart: updatedCartItems,
        totalItemsInCart: state.totalItemsInCart - 1,
      };

    case REMOVE_ITEM_FROM_CART:
      const item = [...state.deserts].indexOf(action.payload);
      const items = [...state.itemsInCart];
      const desertsToRemoveFrom = [...state.deserts];
      desertsToRemoveFrom[item] = {
        ...desertsToRemoveFrom[item],
        inCart: false,
        quantity: 0,
      };
      const updatedCart = items.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        deserts: desertsToRemoveFrom,
        itemsInCart: updatedCart,
        totalItemsInCart: state.totalItemsInCart - action.payload.quantity,
      };

    case COMPLETE_PAYMENT:
      return { ...state, deserts: [], itemsInCart: [], totalItemsInCart: 0 };

    default:
      return state;
  }
};

// Actions
export const fetchDeserts = async (dispatch) => {
  await axios
    .get(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=2&tags=dessert`
    )
    .then(({ data }) => {
      /*  Rounding prices  */
      data.recipes.forEach((recipe) => {
        recipe.pricePerServing = Math.round(recipe.pricePerServing);
      });
      dispatch({ type: FETCH_DESERTS_SUCCESS, payload: data.recipes });
    })
    .catch((error) => {
      dispatch({ type: FETCH_DESERTS_FAIL, payload: error });
    });
};

export const addFilter = (filter) => (dispatch) => {
  dispatch({
    type: ADD_FILTER,
    payload: filter,
  });
};

export const removeFilter = (filter) => (dispatch) => {
  dispatch({
    type: REMOVE_FILTER,
    payload: filter,
  });
};

export const addItemToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: item,
  });
};

export const removeItemFromCart = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: item,
  });
};

export const incrementCardQuantity = (item) => (dispatch) => {
  dispatch({
    type: INCEREMENT_CART_QUANTITY,
    payload: item,
  });
};

export const decrementCardQuantity = (item) => (dispatch) => {
  if (item.quantity > 1) {
    dispatch({
      type: DECREMENT_CART_QUANTITY,
      payload: item,
    });
  } else if (item.quantity === 1) {
    dispatch({
      type: REMOVE_LAST_ITEM_FROM_CART,
      payload: item,
    });
  }
};

export const completePayment = () => (dispatch) => {
  dispatch({
    type: COMPLETE_PAYMENT,
  });
};

export default reducer;
