import React, { useContext, useReducer } from 'react';

const AppContext = React.createContext()

const useAppContext = ()=>{
    return useContext(AppContext)
}

const initialState = {
    todos: [],
    filtredTodos:[],
}

const reducer = (state, action)=>{

    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                todos: action.payload
            }
    
        default: return state;
    }

    
}

const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{todos:state.todos, filtredTodos:state.filtredTodos, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}


export {
    AppProvider, useAppContext
}