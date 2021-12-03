import './homepage.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// interface Iprops {
//     postData?:string;
//     setPostData:(a:string) => {};
// }

export default function Homepage() {

    let navigate = useNavigate()

    function getBlog(category:string)  {

        navigate(`/blog/${category}`, {replace:true})
    }

    return  (
        <div className='category-container'>
            <div className='category-card'>
                {/* each line of text will eventually be replaced with a react variable, so only one of these will be necessary to use as a template */}
                <h3 className='category-name'>Cryptid</h3>
                <h4 className='pronounce'>cryp·​tid | \ ˈkrip-təd</h4>
                <p className='define'>An animal (such as Sasquatch or the Loch Ness Monster) of which its existence has been claimed, but not yet proven</p>
                <button 
                className='category-button' 
                onClick={() => getBlog('cryptid')}
                >Reports</button>
            </div>
            <div className='category-card'>
                <h3 className='category-name'>UFO</h3>
                <h4 className='pronounce'>\ ˌyü-(ˌ)ef-ˈō</h4>
                <p className='define'>UNIDENTIFIED FLYING OBJECT</p>
                <button 
                className='category-button' 
                onClick={() => getBlog('ufo')}
                >Reports</button>
            </div>
            <div className='category-card'>
                <h3 className='category-name'>Paranormal</h3>
                <h4 className='pronounce'>para·​nor·​mal | \ ˌper-ə-ˈnȯr-məl</h4>
                <p className='define'>Not scientifically explainable : SUPERNATURAL</p>
                <button 
                className='category-button' 
                onClick={() => getBlog('paranormal')}
                >Reports</button>
            </div>
            <div className='category-card'>
                <h3 className='category-name'>Other</h3>
                <h4 className='pronounce'>oth·​er | \ ˈə-t͟hər</h4>
                <p className='define'>Being the one (as of two or more) remaining or not included</p>
                <button 
                className='category-button' 
                onClick={() => getBlog('other')}
                >Reports</button>
            </div>
        </div>
    )
}
