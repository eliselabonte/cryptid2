import {useState, useEffect} from 'react';
import axios from 'axios';

const useSearch = () =>  {
    const [search, setSearch] = useState<string>('');
    const [results, setResults] = useState<string>('')

    useEffect( () => {
        if (search!==undefined)   {
            console.log('fetching from API...')
            
            // lines 12-13 for dev - use lines 15-23 instead once routes are connected 
            console.log({search})
            setResults(search)

        // add fetch route here:
        // must proxy server for dev/production
        axios.get(`/api/tags`)
        // add query parameters
        .then((data) =>   {
            console.log({data})
            setResults(data.data)
        });
        }
    else    {
        console.log('search', {search})
    }
    }, [search] );

    return {search, setSearch, results};
}

export default useSearch;