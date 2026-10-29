import { createContext } from "react";

export const MoviesContext = createContext(null);

function MoviesProvider({ children }) {
    

    return (
        <MoviesContext.Provider value={{  }}>
            {children}
        </MoviesContext.Provider>
    );
}

export default MoviesProvider;

