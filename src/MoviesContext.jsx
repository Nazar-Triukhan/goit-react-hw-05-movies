import { createContext } from "react";

export const MoviesContext = createContext(null);

function MoviesProvider({ children }) {
    const text = 'Nazar'

    return (
        <MoviesContext.Provider value={{ text }}>
            {children}
        </MoviesContext.Provider>
    );
}

export default MoviesProvider;

