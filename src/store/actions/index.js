//https://pokeapi.co/api/v2/pokemon/ditto
import axios from "axios";

export const getPokemon = (url) => {
  return (dispatch) => {
    dispatch({ type: "LOAD_START" });
    axios
      .get(url)
      .then((res) => {
        console.log("RES DATA: ", res.data);
        dispatch({ type: "LOAD_SUCC", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "LOAD_ERR", payload: err });
      });
  };
};

export const getIndPokemon = (name) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_IND_START" });
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        console.log("RES IND DATA: ", res.data);
        dispatch({ type: "FETCH_IND_LOAD_SUCC", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_IND_LOAD_LOAD_ERR", payload: err });
      });
  };
};
