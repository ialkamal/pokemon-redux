import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getIndPokemon } from "../store/actions";

function PokeList(props) {
  console.log("POKELIST PROPS: ", props);
  return (
    <div>
      {props.isError ? <h1>{props.errorMsg}</h1> : ""}
      <ul style={{ listStyleType: "none" }}>
        {props.pokeNames &&
          props.pokeNames.map((poke) => {
            return (
              <Link to={`/${poke.name}`} key={poke.name}>
                <li onClick={() => props.getIndPokemon(poke.name)}>
                  {poke.name}
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  //   console.log("STATE: ", state);
  return {
    isLoading: state.pkr.isLoading,
    isError: state.pkr.isError,
    errorMsg: state.pkr.error,
    pokeNames: state.pkr.pokeNames,
  };
};

export default connect(mapStateToProps, { getIndPokemon })(PokeList);
