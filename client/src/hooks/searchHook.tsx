import {useState, useEffect} from 'react';
import axios from 'axios';
// export interface Ipost {
//     description:string;
//     location:string;
// }
// export interface Iresult {
//         tag_name:'';
//         posts:[ Ipost ]
// }
// export interface Iresults {
//     results:[Iresult];
// }

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