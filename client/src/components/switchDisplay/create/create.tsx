import './create.scss'

export default function Create() {
    return (
        
        <div className='create-div'>
            <h3 className='report-div-title'>Report a sighting</h3>
            <p className='search-info'>Be sure to use our search feature to see if others have had a similar experience</p>
            <form className="form new-sighting-form" id="sighting">
                <div className="form-group">
                    <label htmlFor="sighting-report" className='label'>Report </label>
                    <textarea className="form-input" id="sighting-report" name="sighting-report" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="sighting-description" className='label'>Description of creature </label>
                    <textarea className="form-input" id="sighting-description" name="sighting-description" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="sighting-location" className='label'>Location of sighting </label>
                    <input className="form-input" id="sighting-location" name="sighting-name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="sighting-time" className='label'>Time Seen </label>
                    <textarea className="p-3 form-input" id="sighting-time" name="sighting-time" placeholder="yyyy/mm/dd h:m"required></textarea>
                </div>
                <div>
                    <label htmlFor="category" className='label'>Choose a category to report this sighting under: </label>
                    <select name="category" id="category">
                        <option value="1">Cryptid</option>
                        <option value="2">UFO</option>
                        <option value="3">Paranormal</option>
                        <option value="4">Other</option>
                    </select>
                </div>  
                <div className="form-group">
                    <button type="submit">Report</button>
                </div>
            </form>
        </div>
    )
}