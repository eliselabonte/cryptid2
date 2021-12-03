import {useState, useEffect} from 'react';
import axios from 'axios';
export interface Ipost {
    description:string;
    location:string;
}
export interface Iresult {
        tag_name:'';
        posts:[ Ipost ]
}
export interface Iresults {
    results:[Iresult];
}

const useSearch = () =>  {
    const [search, setSearch] = useState<string>('');
    const [results, setResults] = useState([{}]);

    useEffect( () => {
        // if an item is searched...
        if (search!==undefined)   {
            console.log('fetching from API...', search)
            // query the tags table
            axios.get(`/api/tags/${search}`)
        // TODO: add query parameters
            .then((res) =>   {
                const foundResults = res.data
                setResults(foundResults)
            });
        }
    }, [search] );

    return {search, setSearch, results};
}

export default useSearch;