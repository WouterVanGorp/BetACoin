import { useContext } from "react";
import { SquareGameCreatorContext, SquareGameContext, SquareGameUpdateContext } from "./SquareGameContexts";

export function useSquareGameCreatorContext() {
    return useContext(SquareGameCreatorContext);
  }
  
  export function useSquareGameContext() {
    return useContext(SquareGameContext);
  }
  
  export function useSquareGameUpdateContext() {
    return useContext(SquareGameUpdateContext);
  }