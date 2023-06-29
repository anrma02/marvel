import { useContext, useEffect } from 'react';

import { SearchContext } from '~/Context/SearchProvider';
import './Search.scss';
import { Link } from 'react-router-dom';
const Search = () => {
    const { searchResult, totalResults } = useContext(SearchContext);

    useEffect(() => {
        // console.log(searchResult.searchResult, 111);
        // console.log(totalResults.totalResults, 222);
    }, [searchResult.searchResult, totalResults.totalResults]);
    return (
        <div className="max-w-[1200px] m-auto">
            <h1 className="text-white font-bold text-[18px]">{totalResults} RESULTS </h1>
            <div className="relative w-[840px] ">
                {searchResult &&
                    searchResult.map((item) => {
                        return (
                            <div key={item.id} className="py-[30px] px-0 border-b border-solid border-b-[#f2f2f2]  ">
                                <Link to={`/comics/issue/${item.id}`}>
                                    <div className="searchWrapper">
                                        <img
                                            className="w-[200px] h-[200px]   "
                                            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                            alt=""
                                        />
                                        <div>
                                            <h2 className="absolute  text-[22px] font-extrabold cursor-pointer  hover:text-red-500">
                                                {item.title}
                                            </h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Search;
