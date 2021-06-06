import axios from "axios";
const { REACT_APP_SPOONACULAR_API_KEY: apiKey } = process.env;

// Constants
const FETCH_DESERTS_SUCCESS = "FETCH_DESERTS_SUCCESS";
const FETCH_DESERTS_FAIL = "FETCH_DESERTS_FAIL";

// Initial state
const INITIAL_STATE = {
  deserts: [],
  error: null,
};

// Reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DESERTS_SUCCESS:
      return { ...state, deserts: action.payload };

    case FETCH_DESERTS_FAIL:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

// Actions
export const fetchDeserts = async (dispatch) => {
  await axios
    .get(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10&tags=dessert`
    )
    .then(({ data }) => {
      dispatch({ type: FETCH_DESERTS_SUCCESS, payload: data.recipes });
    })
    .catch((error) => {
      dispatch({ type: FETCH_DESERTS_FAIL, payload: error });
    });
};

export default reducer;
