const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  pokeNames: [],
  prev: "",
  next: "",
  pokemon: [],
};

export function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_START":
      return {
        ...state,
        isLoading: true,
      };
    case "LOAD_SUCC":
      return {
        ...state,
        isLoading: false,
        isError: false,
        pokeNames: action.payload.results,
        prev: action.payload.prev,
        next: action.payload.next,
      };
    case "LOAD_ERR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload.message,
      };

    case "FETCH_IND_LOAD_SUCC":
      return {
        ...state,
        isLoading: false,
        pokemon: action.payload,
      };
    case "FETCH_IND_LOAD_Erroe":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
