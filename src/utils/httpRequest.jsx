import axios from 'axios';

const httpRequest = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_BASE_URL,
});
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
