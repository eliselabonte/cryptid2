import './intro.scss';
import Creatrues from '../../images/creature.png'

export default function Intro() {
    return  (
        <div className='intro'>
            <img src={Creatrues} className='creatures' alt='a drawing of an alien, mothman, and a ghost'/>
        </div>
    )
}
