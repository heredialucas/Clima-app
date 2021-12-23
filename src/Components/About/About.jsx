import './About.css'
import { useSelector } from 'react-redux'

export default function About () {

    const style = useSelector(state => state.style)
    return (
        <p className={style ? 'containerAbout': 'containerAbout1'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta exercitationem aliquid illum. Neque consectetur quam odio ipsum, rem vel soluta assumenda accusantium, iure placeat libero rerum excepturi. Harum, necessitatibus consequuntur?
        </p>
    )
}