import {useState, useEffect} from 'react';
import axios from 'axios';

export const useSearch = () =>  {
    const [search, setSearch] = useState<string>('');
    const [results, setResults] = useState([{}]);

    useEffect( () => {
        console.log('search changed!', search)
        if (search!==undefined)   {
            axios.get(`/api/tags/${search}`)
            .then((res) =>   {
                const foundResults = res.data
                setResults(foundResults)
            });
        }
    }, [search] );

    return {search, setSearch, results};
};