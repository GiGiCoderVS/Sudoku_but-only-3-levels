import { NavLink } from 'react-router-dom';
const Lose = () => {
    return(
        <div className="container">
            <h1>You lose! Do you want to restart to check out your intellegent again?</h1>
            <NavLink to="/game" className="link">Restart</NavLink>
        </div>
    )
}
export default Lose