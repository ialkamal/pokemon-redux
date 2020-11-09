import React from "react";
import { connect } from "react-redux";

function Pokemon(props) {
  return (
    <div>
      <h2>{props.pokemon.name}</h2>
      <img src={props.pokemon.sprites.back_default} width="200px" />
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

export default connect(mapStateToProps, {})(Pokemon);
