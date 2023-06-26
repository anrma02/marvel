import { useContext } from 'react';
import { SearchContext } from '~/Context/SearchProvider';

const Search = () => {
    const searchResult = useContext(SearchContext);
    console.log(searchResult);
    return (
        <div>
            <div>
                <h1 className="text-white">Search Results: </h1>
                {searchResult && (
                    <div>
                        <h2>{searchResult.searchResult.name}</h2>
                        <p>{searchResult.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
