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

export const useSearch = () =>  {
    const [search, setSearch] = useState<string>('');
    const [results, setResults] = useState([{}]);

    useEffect( () => {
        // if an item is searched...
        if (search!==undefined)   {
            console.log('fetching searchResults from API...', search)
            // query the tags table
            axios.get(`/api/tags/${search}`)
        // SPRINKLES: add query parameters
            .then((res) =>   {
                const foundResults = res.data
                setResults(foundResults)
            });
        }
    }, [search] );

    return {search, setSearch, results};
};

export const useBlogData = () => {

    // TODO: there is no need for this to be a custom hook. 
    //       currently it is only returning the below useState function
    const [category, setCategory] = useState<string>('cryptid')
    const [posts, setPosts] = useState<[{}]>([{}])

    // useEffect(() => {
    //     if (category!==undefined)   {
    //         console.log(`fetching ${category} from API...`)

    //         axios.get(`/api/tags/`)
    //         .then((res) =>   {
    //             const foundResults = res.data
    //             console.log(foundResults)
    //             setPosts(foundResults)
    //         })
    //         .catch((err) =>    {
    //             console.error(err)
    //         }) ;
    //     }
    //     }, [category])

    return {category, setCategory};
}
