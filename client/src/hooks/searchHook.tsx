import {useState, useEffect} from 'react';
import axios from 'axios';

export const useSearch = () =>  {
    const [search, setSearch] = useState<string>('');
    const [results, setResults] = useState([{}]);

    useEffect( () => {
        if (search!==undefined)   {
            // console.log('fetching searchResults from API...', search)
            axios.get(`/api/tags/${search}`)
            .then((res) =>   {
                const foundResults = res.data
                setResults(foundResults)
            });
        }
        // SPRINKLES: add query parameters
    }, [search] );

    return {search, setSearch, results};
};