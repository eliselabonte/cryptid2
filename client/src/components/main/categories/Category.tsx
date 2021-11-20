import './category.scss';

export default function Category() {
    return  (
        <div className='category-container'>
            <div className='category-card'>
                {/* each line of text will eventually be replaced with a react variable, so only one of these will be necessary to use as a template */}
                <h3 className='category-name'>Cryptid</h3>
                <h4 className='pronounce'>cryp·​tid | \ ˈkrip-təd</h4>
                <p className='define'>An animal (such as Sasquatch or the Loch Ness Monster) that has been claimed to exist but never proven to exist</p>
                <button className='category-button'>Reports</button>
            </div>
            <div className='category-card'>
                <h3 className='category-name'>UFO</h3>
                <h4 className='pronounce'>\ ˌyü-(ˌ)ef-ˈō</h4>
                <p className='define'>UNIDENTIFIED FLYING OBJECT</p>
                <button className='category-button'>Reports</button>
            </div>
            <div className='category-card'>
                <h3 className='category-name'>Paranormal</h3>
                <h4 className='pronounce'>para·​nor·​mal | \ ˌper-ə-ˈnȯr-məl</h4>
                <p className='define'>Not scientifically explainable : SUPERNATURAL</p>
                <button className='category-button'>Reports</button>
            </div>
            <div className='category-card'>
                <h3 className='category-name'>Other</h3>
                <h4 className='pronounce'>oth·​er | \ ˈə-t͟hər</h4>
                <p className='define'>Being the one (as of two or more) remaining or not included</p>
                <button className='category-button'>Reports</button>
            </div>
        </div>
    )
}
