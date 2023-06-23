import axios from 'axios';
import CryptoJS from 'crypto-js';

const URL = 'https://gateway.marvel.com/v1/public';
const publicKey = '8640acbe6c37fb9a37da5939084b908e';
const privateKey = 'a620063878d9ef3d3bdb2cbd4c3b3cf7560245ff';
const ts = new Date().getTime();

const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

export const searchService = async function (name) {
    try {
        const res = await axios.get(`${URL}/characters?apikey=${publicKey}&ts=${ts}&hash=${hash}&name=${name}`);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
