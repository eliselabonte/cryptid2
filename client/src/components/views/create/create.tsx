import './create.scss';
import axios from 'axios';
import $ from 'jquery';
import { useAuth0 } from '@auth0/auth0-react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

export default function Create(props:any) {
    const { user, isAuthenticated } = useAuth0();
    const { userId } = props;
    const navigate = useNavigate();

    function submitForm(e:any) {
        e.preventDefault()

        if(!isAuthenticated) {
            window.alert('please log in to create a report.')
        }
        else {
            const report = $('#report').val();
            const description = $('#description').val();
            const location = $('#location').val();
            const dateTime = $('#time').val();
            const timeSeen = moment(dateTime).format('YYYY-MM-DD HH:mm') || undefined;
            const category = $('#category');
            const category_id = category.val();
            const user_id = userId;
            console.log(user_id)
            axios.post(`/api/posts/`, {
            report, 
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
        navigate('/', {replace:true})
    }

    return (
        <div className='create-div'>
            <h3 className='report-div-title'>Report a sighting</h3>
            <p className='search-info'>Be sure to use our search feature to see if others have had a similar experience</p>
            <form className="form new-sighting-form" id="sighting" onSubmit={submitForm}>
                <div className='dropdown'>
                    <label htmlFor="category" className='label'>Choose a category to report this sighting under: </label>
                    {/* TODO: scss doesn't register this as a child without a div wrapping it */}
                    <div>
                        <select name="category" id="category">
                            <option value="1">Cryptid</option>
                            <option value="2">UFO</option>
                            <option value="3">Paranormal</option>
                            <option value="4">Other</option>
                        </select>
                    </div>
                </div> 
                <div className="form-group">
                    <label htmlFor="report" className='label'>Report</label>
                    <textarea className="form-input report" id="report" name="report" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="description" className='label'>Description of creature</label>
                    <textarea className="form-input description" id="description" name="description" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="location" className='label'>Location</label>
                    <textarea className="form-input" id="location" name="name" required ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="time" className='label'>Time Seen</label>
                    <input className="form-input" id="time" name="time" type='datetime-local' required/>
                </div> 
                <div className="form-group submit-button">
                    <button type="submit">Report</button>
                </div>
            </form>
        </div>
    )
}