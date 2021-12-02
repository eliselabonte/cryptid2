export default function Create() {
    return (
        
        <div>
            <h3>Report a sighting</h3>
            <p>Be sure to use our search feature to see if others have had a similar experience</p>
            <form className="form new-sighting-form" id="sighting">
                <div className="form-group">
                    <label htmlFor="sighting-report">Report</label>
                    <textarea className="form-input" id="sighting-report" name="sighting-report" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="sighting-description">Description of cryptid</label>
                    <textarea className="form-input" id="sighting-description" name="sighting-description" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="sighting-location">Location of sighting</label>
                    <input className="form-input" type="text" id="sighting-location" name="sighting-name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="sighting-time">Time Seen</label>
                    <textarea className="p-3 form-input" id="sighting-time" name="sighting-time" placeholder="year-month-date hour:minute"required></textarea>
                </div>
                <div>
                    <label htmlFor="category">Choose a category</label>
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