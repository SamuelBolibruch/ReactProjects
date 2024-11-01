import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer"

const initialState = {
    transactions: []
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);
    
    const deleteTransaction = (id) => {
        dispatch({ type: "DELETE_TRANSACTION", payload: id });
      };

    const addTransaction = (transaction) => {
      dispatch({ type: "ADD_TRANSACTION", payload: transaction });
    };

    return <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
};
