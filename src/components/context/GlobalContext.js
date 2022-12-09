import {  useContext, useReducer,useEffect } from "react";
import { createContext } from "react";
import { reducer } from "./Reducer";
const intialState ={
    watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],
    watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[],
}

export const GlobalContext=createContext(intialState);

const ContextProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,intialState);
    useEffect(()=>{
        localStorage.setItem("watchlist",JSON.stringify(state.watchlist));
        localStorage.setItem("watched",JSON.stringify(state.watched));
    },[state])
    return <GlobalContext.Provider value={{watchlist:state.watchlist ,watched:state.watched ,MoviesDispatch : dispatch}}>{children}</GlobalContext.Provider>
}
export default ContextProvider;
export const useMovieContext=()=>{
    return useContext(GlobalContext)
}