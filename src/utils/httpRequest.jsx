import axios from 'axios';

const httpRequest = axios.create({
    url: 'https://spotify23.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '4338a4e59amsha573be8833d39f9p11eb67jsn281f9d6dc5cc',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    },
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
