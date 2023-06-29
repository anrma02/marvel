import axios from 'axios';
import CryptoJS from 'crypto-js';

const publicKey = '8640acbe6c37fb9a37da5939084b908e';
const privateKey = 'a620063878d9ef3d3bdb2cbd4c3b3cf7560245ff';
const ts = new Date().getTime();

const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

export const searchCharactersService = async function (debounceValue) {
    try {
        const res = await axios.get(
            `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${ts}&hash=${hash}&nameStartsWith=${encodeURIComponent(
                debounceValue,
            )}`,
        );
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const searchComicsService = async function (debounceValue) {
    try {
        const res = await axios.get(
            `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${ts}&hash=${hash}&comics=${encodeURIComponent(
                debounceValue,
            )}`,
        );
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
