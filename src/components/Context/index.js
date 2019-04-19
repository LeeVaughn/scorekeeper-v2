import React from "react";

// initializes a new Context using createContext method
const ScoreboardContext = React.createContext();

export const Provider = ScoreboardContext.Provider;
export const Consumer = ScoreboardContext.Consumer;
