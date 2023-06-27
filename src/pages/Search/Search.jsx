import { useContext,useEffect } from 'react';
import { SearchContext } from '~/Context/SearchProvider';

const Search = () => {
    const searchResult = useContext(SearchContext);
    useEffect(() => {
            console.log(searchResult.searchResult, 111);
    }, [searchResult.searchResult]);
    return (
        <div>
            <div>
                <h1 className="text-white">Search Results: </h1>
                {searchResult && searchResult.searchResult.map((item) => {
                    return (
                        <div key={item.id}>
                            <img style={{maxWidth: 300}} src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    )
                }) }
            </div>
        </div>
    );
};

export default Search;
