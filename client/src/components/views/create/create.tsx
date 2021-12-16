import './create.scss';
import axios from 'axios';
import dayjs from 'dayjs';

export default function Create() {

    function submitForm(e:any) {
        e.preventDefault()

        const report = $('#report');
        const description = $('#description');
        const location = $('#location');
        const timeSeen = $('#time');
        const category_id = $('#category_id');
        const user_id = 2;

        console.log(report)
            axios.post(`/api/posts/`, {report, 
            description, 
            location, 
            timeSeen, 
            category_id, 
            user_id
            })
            .then((res) =>   {
                const confirm = res.data;
                console.log(confirm)
                window.alert('new post created')
            });
    }

    return (
        <div className='create-div'>
            <h3 className='report-div-title'>Report a sighting</h3>
            <p className='search-info'>Be sure to use our search feature to see if others have had a similar experience</p>
            <form className="form new-sighting-form" id="sighting" onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="report" className='label'>Report </label>
                    <textarea className="form-input" id="report" name="report" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="description" className='label'>Description of creature </label>
                    <textarea className="form-input" id="description" name="description" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="location" className='label'>Location</label>
                    <input className="form-input" id="location" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="time" className='label'>Time Seen </label>
                    <textarea className="p-3 form-input" id="time" name="time" placeholder="yyyy/mm/dd h:m"required></textarea>
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