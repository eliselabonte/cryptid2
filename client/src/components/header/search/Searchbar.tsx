import './search.scss';

export default function Searchbar(props:any) {
    const {setDisplay} = props;

    const handleSearchSubmit = (e:any) =>   {
        e.preventDefault();

        setDisplay('SearchLanding')

        const searchItem = e.target.search.value;
        console.log(searchItem);
    }

    return  (
        <form 
        id='search-bar'
        onSubmit= {handleSearchSubmit}
        >
            <input name='search' className='search' placeholder='🔍'></input>
        </form>
    )
}
