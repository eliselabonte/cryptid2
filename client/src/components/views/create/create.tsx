import './create.scss';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
interface Istate {
    report:'', 
    description:'', 
    locationSeen:'', 
    timeSeen:'', 
    category_id:number, 
    user_id:number}

export default function Create(props:any) {
    const { register, handleSubmit } = useForm();

    const { user, isAuthenticated } = useAuth0();
    const { userId } = props;
    const navigate = useNavigate();

    const [newReport, setNewReport] = useState<Istate>({
            report:'', 
            description:'', 
            locationSeen:'', 
            timeSeen:'', 
            category_id:1, 
            user_id:userId})

    const updateField = (key:string) => (event:any) => { 
        setNewReport({...newReport, [key]: event.target.value}) }

    function submitForm(e:any) {
        e.preventDefault()

        const user_id = userId;
        
        if(!isAuthenticated) {
            window.alert('please log in to create a report.')
        }
        else {
            const {report, description, locationSeen, timeSeen, category_id, user_id} = newReport
            console.log(user_id)
            axios.post(`/api/posts/`, {
            report, 
            description, 
            location: locationSeen, 
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
                        <select name="category" id="category" 
                        value={newReport.category_id}
                        onChange={updateField('category_id')}>
                            <option value="1">Cryptid</option>
                            <option value="2">UFO</option>
                            <option value="3">Paranormal</option>
                            <option value="4">Other</option>
                        </select>
                    </div>
                </div> 
                <div className="form-group">
                    <label htmlFor="report" className='label'>Report</label>
                    <textarea 
                    className="form-input report" 
                    id="report" name="report" 
                    value={newReport.report} 
                    onChange={updateField('report')} required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="description" className='label'>Description of creature</label>
                    <textarea 
                    className="form-input description" 
                    id="description" name="description"
                    value={newReport.description} 
                    onChange={updateField('description')} required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="location" className='label'>Location</label>
                    <textarea 
                    className="form-input" 
                    id="location" name="name"
                    value={newReport.locationSeen} 
                    onChange={updateField('locationSeen')} required ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="time" className='label'>Time Seen</label>
                    <input 
                    className="form-input" 
                    id="time" name="timeSeen" 
                    type='datetime-local'
                    value={newReport.timeSeen} 
                    onChange={updateField('timeSeen')} required/>
                </div> 
                <div className="form-group submit-button">
                    <button type="submit">Report</button>
                </div>
            </form>
        </div>
    )
}