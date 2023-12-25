import { NavLink } from 'react-router-dom';
const Won = () => {
    return(
        <div className="container">
            <h1>You won it! You're really smart</h1>
            <NavLink to="/game" className="link">New Game</NavLink>
        </div>
    )
}
export default Won