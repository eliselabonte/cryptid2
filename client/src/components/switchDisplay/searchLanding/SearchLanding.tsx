import './searchLanding.scss';
interface Iprops {
    results:string;
}

export default function SearchLanding(props:Iprops) {
    const {results} = props;
    
    return (
        <div className='searchLanding'>
            <h2 className='search-landing-title'>{results ? 
            `Search Results for "${results}"` : 
            `no results`}
            </h2>
            <div className='search-result'>
                <h3 className='report-title'>Report title</h3>
                <h4 className='name-date'>by \name\ on \date\</h4>
            </div>
        </div>
    )
}
