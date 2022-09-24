import React from "react";
import { ACTIONS } from "./App";

function OperationButton({ operation, dispatch, classes, xs }) {
  return (
    <button className={classes}  style={xs}
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
      {operation}
    </button>
  );
}

export default OperationButton;
