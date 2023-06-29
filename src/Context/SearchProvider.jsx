/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchResult, setSearchResult] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    return (
        <SearchContext.Provider
            value={{
                searchResult,
                setSearchResult,
                totalResults,
                setTotalResults,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
SearchProvider.prototype = {
    children: PropTypes.node.isRequired,
};
