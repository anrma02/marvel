import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

import style from './SearchValue.module.scss';
import useDebounce from '~/hooks/useDebounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

const publicKey = '8640acbe6c37fb9a37da5939084b908e';
const privateKey = 'a620063878d9ef3d3bdb2cbd4c3b3cf7560245ff';
const ts = Date.now();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

function SearchValue() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        const fetchData = async () => {
            if (!debounceValue.trim()) {
                setSearchResult([]);
                return;
            }

            try {
                const response = await axios.get(
                    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${debounceValue}&apikey=${publicKey}&ts=${ts}&hash=${hash}`,
                );
                console.log(response.data);
                setSearchResult(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [debounceValue]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        <div className="inline-flex box-border border-l  border-r border-r-[#393939] h-[51px] border-l-[#393939]  ">
            <div className={cx('input-wrapper')}>
                <button className={cx('icon')}>
                    <FontAwesomeIcon className="text-white" icon={faSearch} />
                </button>
                <input
                    placeholder="search.."
                    className={cx('input')}
                    name="text"
                    type="text"
                    value={searchValue}
                    spellCheck={false}
                    onChange={handleChange}
                    // onFocus={() => setShowResult(true)}
                />
            </div>
        </div>
    );
}

export default SearchValue;
