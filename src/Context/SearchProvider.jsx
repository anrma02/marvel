/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchResult, setSearchResult] = useState([]);

    return <SearchContext.Provider value={{ searchResult, setSearchResult }}>{children}</SearchContext.Provider>;
};
SearchProvider.prototype = {
    children: PropTypes.node.isRequired,
};
