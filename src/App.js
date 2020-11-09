import React, { useEffect } from "react";
import "./App.css";
import PokeList from "./components/PokeList";
import Pokemon from "./components/Pokemon";
import { connect } from "react-redux";
import { getPokemon } from "./store/actions";
import { Route, Link } from "react-router-dom";

function App(props) {
  console.log("APP PROPS: ", props);

  useEffect(() => {
    props.getPokemon("https://pokeapi.co/api/v2/pokemon?limit=20");
  }, []);

  return (
    <div className="App">
      <Link to="/">
        <h1>Pokemon with Redux</h1>
      </Link>

      <Route exact path="/">
        <PokeList getPokemon={props.getPokemon} />
      </Route>
      <Route exact path={`/${props.pokemon.name}`}>
        <Pokemon />
      </Route>
    </div>
  );
}

const mapStateToProps = (state) => {
  //   console.log("STATE: ", state);
  return {
    isLoading: state.pkr.isLoading,
    isError: state.pkr.isError,
    errorMsg: state.pkr.error,
    pokemon: state.pkr.pokemon,
  };
};

export default connect(mapStateToProps, { getPokemon })(App);
