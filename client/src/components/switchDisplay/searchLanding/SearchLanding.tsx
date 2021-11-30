import './searchLanding.scss';

export default function SearchLanding() {
    return (
        <div className='searchLanding'>
            <h2 className='search-landing-title'>Search Results</h2>
            <div className='search-result'>
                <h3 className='report-title'>Report title</h3>
                <h4 className='name-date'>by \name\ on \date\</h4>
            </div>
        </div>
    )
}
