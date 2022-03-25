import React, { createContext, useReducer, useContext } from "react";

// prapares the datalayer
export const StateContext = createContext();

// wrap our app and provides the datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from the datalayer
export const useStateValue = () => useContext(StateContext);
