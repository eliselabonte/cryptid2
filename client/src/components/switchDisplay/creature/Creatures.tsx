import './creatures.scss';
import MIB from '../../../images/MIB.jpeg';

export default function Creatures() {
    return(
        <div className='creatures'>
            <h2 className='creature-title'>Men In Black</h2>
            <img className='creature-image' alt="monsters" src={MIB}/> 
            <p className='description'>Some creepy alien guys that show up in suits to ruin your day.</p>
            <ul className='creature-data'>
                <li>wear black</li>
                <li>pale</li>
                <li>creepy</li>
                <li>dangerous</li>
                <li>hypnotic</li>
                <li>black eyes</li>
                <li>suit and tie</li>
                <li>related to alien activity</li>
            </ul>
        </div>
    )
}
