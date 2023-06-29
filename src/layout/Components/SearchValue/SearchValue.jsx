import classNames from 'classnames/bind';
import { useEffect, useState, useRef, useContext } from 'react';

import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';

import SearchItem from '~/components/ListItems/ListItem';
import style from './SearchValue.module.scss';
import useDebounce from '~/hooks/useDebounce';
import PopperWrapper from '~/components/Proper/PopperWrapper';
import { SearchContext } from '~/Context/SearchProvider';
import { useNavigate } from 'react-router-dom';
import { searchCharactersService } from '~/services/httpRequest';

const cx = classNames.bind(style);

function SearchValue() {
    const navigate = useNavigate();
    const { searchResult, setSearchResult, setTotalResults } = useContext(SearchContext);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debounceValue = useDebounce(searchValue, 600);

    const handleSearch = async () => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        try {
            const response = await searchCharactersService(debounceValue);

            const data = response.data;
            const res = data.data.results;
            console.log(res);
            setSearchResult(res);
            setTotalResults(response.data.data.total);

            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            setSearchResult(null);
        }
    };

    useEffect(() => {
        handleSearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleEnter = (e) => {
        if (searchValue.length === 0) {
            return;
        } else if (e.key === 'Enter') {
            navigate(`/search?nameStartsWith=${searchValue}`);
        }
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                // offset={[-100, 10]}
                placement="bottom-start"
                render={(attrs) => (
                    <PopperWrapper>
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            {searchResult.map((item) => (
                                <SearchItem key={item.id} {...item} />
                            ))}
                        </div>
                    </PopperWrapper>
                )}
                onClickOutside={handleHideResult}
            >
                <div className="inline-flex box-border border-l  border-r border-r-[#393939] h-[51px] border-l-[#393939]  ">
                    <div className={cx('input-wrapper')}>
                        <button className={cx('icon')} onClick={handleSearch}>
                            <FontAwesomeIcon icon={faSearch} className="text-white text-[18px] font-bold" />
                        </button>
                        <input
                            onKeyDown={handleEnter}
                            ref={inputRef}
                            placeholder="search.."
                            className={cx('input')}
                            value={searchValue}
                            spellCheck={false}
                            onChange={handleChange}
                            onFocus={() => setShowResult(true)}
                        />

                        <div>
                            {!!searchValue && !loading && (
                                <button className="btn">
                                    <FontAwesomeIcon className={cx('clear')} icon={faXmark} onClick={handleClear} />
                                </button>
                            )}
                        </div>

                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default SearchValue;
