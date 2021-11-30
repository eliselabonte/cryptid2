import './homepage.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Homepage(props:any) {

    const {display, setDisplay} = props;

    return  (
        <div className='category-container'>
            <div className='category-card'>
                {/* each line of text will eventually be replaced with a react variable, so only one of these will be necessary to use as a template */}
                <h3 className='category-name'>Cryptid</h3>
                <h4 className='pronounce'>cryp·​tid | \ ˈkrip-təd</h4>
                <p className='define'>An animal (such as Sasquatch or the Loch Ness Monster) that has been claimed to exist but never proven to exist</p>
                <Link 
                to='/blog/cryptid'
                className='category-button' 
                >Reports</Link>
            </div>
            <div className='category-card'>
                <h3 className='category-name'>UFO</h3>
                <h4 className='pronounce'>\ ˌyü-(ˌ)ef-ˈō</h4>
                <p className='define'>UNIDENTIFIED FLYING OBJECT</p>
                <Link 
                to='/blog/ufo'
                className='category-button' 
                >Reports</Link>
            </div>
            <div className='category-card'>
                <h3 className='category-name'>Paranormal</h3>
                <h4 className='pronounce'>para·​nor·​mal | \ ˌper-ə-ˈnȯr-məl</h4>
                <p className='define'>Not scientifically explainable : SUPERNATURAL</p>
                <Link 
                to='/blog/paranormal'
                className='category-button' 
                >Reports</Link>
            </div>
            <div className='category-card'>
                <h3 className='category-name'>Other</h3>
                <h4 className='pronounce'>oth·​er | \ ˈə-t͟hər</h4>
                <p className='define'>Being the one (as of two or more) remaining or not included</p>
                <Link 
                to='/blog/other'
                className='category-button' 
                >Reports</Link>
            </div>
        </div>
    )
}
