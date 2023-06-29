import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { comicsByIdService } from '~/services/httpRequest';

function Comics() {
    const [comics, setComics] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fecthAPI = async () => {
            try {
                const response = await comicsByIdService(id);
                const data = response.data;
                const res = data.data.results[0];
                console.log('🚀: ', res);
                setComics(res);
            } catch (error) {
                console.log('🚀 ~ file: Comics.jsx:16 ~ fecthAPI ~ error:', error);
            }
        };
        fecthAPI();
    }, [id]);

    return <div>{comics && <h2 className="text-white">Comic: {comics.title} </h2>}</div>;
}

export default Comics;
