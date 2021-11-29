import './intro.scss';
import Creatures from '../../images/creature.png'

export default function Intro() {
    return  (
        <div className='intro-block' id='top'>
            <img src={Creatures} className='creatures' alt='an alien, mothman, and a ghost'/>
        </div>
    )
}
