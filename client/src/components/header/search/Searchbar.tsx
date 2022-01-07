import './search.scss';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
interface Iprops {
    search:string;
    setSearch:(a:string) => {};
}

export default function Searchbar(props:Iprops) {
    let navigate = useNavigate();
    
    const {search, setSearch} = props;

    const [inputValue, setInputValue] = useState<string>('')
    
    const submit = (event:any) =>  {
        event.preventDefault();
        if(inputValue!==''){
            setSearch(inputValue);
            console.log('search changed to ', search)
            // TODO: search not updating to input value, remains undefined

            navigate(`/search/${inputValue}`, { replace: true });
    
            // TODO: account for spaces in input variable
        }
    }

    const change = (event:any) => {
        setInputValue(event.target.value)
    }

    return  (
        <form 
        id='search-bar'
        onSubmit={submit} 
        >
            <input 
            name='search' 
            className='search' 
            placeholder='🔍'
            onChange={change} 
            value={inputValue}/>
        </form>
    )
}
