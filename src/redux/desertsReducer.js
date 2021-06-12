import axios from "axios";
const { REACT_APP_SPOONACULAR_API_KEY: apiKey } = process.env;

// Constants
const FETCH_DESERTS_SUCCESS = "FETCH_DESERTS_SUCCESS";
const FETCH_DESERTS_FAIL = "FETCH_DESERTS_FAIL";
const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const INCEREMENT_CART_QUANTITY = "INCREMENT_CART_QUANTITY";
const DECREMENT_CART_QUANTITY = "DECREMENT_CART_QUANTITY";
const REMOVE_LAST_ITEM_FROM_CART = "REMOVE_LAST_ITEM_FROM_CART";
const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
const COMPLETE_PAYMENT = "COMPLETE_PAYMENT";

// Initial state
const initialState = {
  deserts: [],
  itemsInCart: [],
  totalItemsInCart: 0,
  error: null,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DESERTS_SUCCESS:
      return {
        ...state,
        deserts: action.payload,
      };

    case FETCH_DESERTS_FAIL:
      return { ...state, error: action.payload };

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
        itemsInCart: [
          ...state.itemsInCart,
          { ...action.payload, quantity: 1, inCart: true },
        ],
        totalItemsInCart: state.totalItemsInCart + 1,
      };

    case INCEREMENT_CART_QUANTITY:
      const itemsInCartToIncrement = [...state.itemsInCart];
      const desertsToIcrement = [...state.deserts];

      // Incrementing the quantity of the object in the cart array
      const cartItemToIncrement = itemsInCartToIncrement.find(
        (item) => item.id === action.payload.id
      );
      cartItemToIncrement.quantity += 1;

      // Incrementing quantity of the object in the desserts array
      const itemToIncrement = desertsToIcrement.find(
        (desert) => desert.id === action.payload.id
      );
      itemToIncrement.quantity += 1;

      return {
        ...state,
        deserts: desertsToIcrement,
        itemsInCart: itemsInCartToIncrement,
        totalItemsInCart: state.totalItemsInCart + 1,
      };

    case DECREMENT_CART_QUANTITY:
      const itemsInCartToDecrement = [...state.itemsInCart];
      const desertsToDecrement = [...state.deserts];

      // Decrementing the quantity of the object in the cart array
      const cartItemToDecrement = itemsInCartToDecrement.find(
        (item) => item.id === action.payload.id
      );
      cartItemToDecrement.quantity -= 1;

      // Decrementing quantity of the object in the desserts array
      const itemToDecrement = desertsToDecrement.find(
        (desert) => desert.id === action.payload.id
      );
      itemToDecrement.quantity -= 1;

      return {
        ...state,
        itemsInCart: itemsInCartToDecrement,
        deserts: desertsToDecrement,
        totalItemsInCart: state.totalItemsInCart - 1,
      };

    case REMOVE_LAST_ITEM_FROM_CART:
      const cartItems = [...state.itemsInCart];
      const desertsToUpdate = [...state.deserts];

      // Removing item from the cart
      const itemToRemove = cartItems.find(
        (item) => item.id === action.payload.id
      );
      itemToRemove.inCart = false;
      itemToRemove.quantity = 0;

      // Updating the item in the desserts list to keep the UI in sync.
      const ItemToUpdate = desertsToUpdate.find(
        (item) => item.id === action.payload.id
      );
      ItemToUpdate.inCart = false;
      ItemToUpdate.quantity = 0;

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
      const items = [...state.itemsInCart];
      const desserts = [...state.deserts];

      // Upaating the item in the cart
      const item = items.find((item) => item.id === action.payload.item.id);
      item.quantity = 0;
      item.inCart = false;

      const itemInDesserts = desserts.find(
        (item) => item.id === action.payload.item.id
      );
      itemInDesserts.quantity = 0;
      itemInDesserts.inCart = false;

      const updatedCart = items.filter(
        (item) => item.id !== action.payload.item.id
      );

      return {
        ...state,
        deserts: desserts,
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
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${apiKey}&ids=644693,634091,636328,636766,634854,644681,655525,631785,715449`
    )
    .then(({ data }) => {
      /*  Rounding prices  */
      data.forEach((recipe) => {
        recipe.pricePerServing = Math.round(recipe.pricePerServing);
      });
      dispatch({ type: FETCH_DESERTS_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_DESERTS_FAIL, payload: error });
    });
};

export const addItemToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: item,
  });
};

export const removeItemFromCart = (item, quantity) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: { item, quantity },
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
