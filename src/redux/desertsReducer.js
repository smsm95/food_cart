import axios from "axios";
const { REACT_APP_SPOONACULAR_API_KEY: apiKey } = process.env;

// Constants
const FETCH_DESERTS_SUCCESS = "FETCH_DESERTS_SUCCESS";
const FETCH_DESERTS_FAIL = "FETCH_DESERTS_FAIL";

// Initial state
const INITIAL_STATE = {
  deserts: [
    {
      id: 0,
      title: "title_1",
      summary: "Summary",
      pricePerServing: 12,
      image: "https://source.unsplash.com/random",
      readyInMinutes: 45,
      servings: 2,
    },
    {
      id: 1,
      title: "title_2",
      summary: "Summary",
      pricePerServing: 12,
      image: "https://source.unsplash.com/random",
      readyInMinutes: 38,
      servings: 1,
    },
    {
      id: 3,
      title: "title_3",
      summary: "Summary",
      pricePerServing: 7,
      image: "https://source.unsplash.com/random",
      readyInMinutes: 45,
      servings: 3,
    },
  ],
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
