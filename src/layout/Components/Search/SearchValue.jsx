import classNames from 'classnames/bind';
import { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';

import SearchItem from '~/components/ListItems/ListItem';
import style from './SearchValue.module.scss';
import useDebounce from '~/hooks/useDebounce';
import PopperWrapper from '~/components/Proper/PopperWrapper';
import { SearchContext } from '~/Context/SearchProvider';

const cx = classNames.bind(style);
const publicKey = '8640acbe6c37fb9a37da5939084b908e';
const privateKey = 'a620063878d9ef3d3bdb2cbd4c3b3cf7560245ff';
const ts = Date.now();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

function SearchValue() {
    const [searchValue, setSearchValue] = useState('');
    // const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounceValue = useDebounce(searchValue, 600);
    const { searchResult, setSearchResult } = useContext(SearchContext);

    const fetchData = async () => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        try {
            const response = await axios.get(
                `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${encodeURIComponent(
                    debounceValue,
                )}&apikey=${publicKey}&ts=${ts}&hash=${hash}`,
            );

            console.log(response.data.data.results);
            setSearchResult(response.data.data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            setSearchResult(null);
        }
    };

    useEffect(() => {
        fetchData();
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
                        <button className={cx('icon')}>
                            <FontAwesomeIcon icon={faSearch} className="text-white text-[18px] font-bold" />
                        </button>
                        <input
                            ref={inputRef}
                            placeholder="search.."
                            className={cx('input')}
                            value={searchValue}
                            spellCheck={false}
                            onChange={handleChange}
                            onFocus={() => setShowResult(true)}
                        />
                        {!!searchValue && !loading && (
                            <button className="btn">
                                <FontAwesomeIcon className={cx('clear')} icon={faXmark} onClick={handleClear} />
                            </button>
                        )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default SearchValue;
