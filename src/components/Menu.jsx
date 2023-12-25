import { NavLink } from 'react-router-dom';
const Menu = () => {
    return(
        <div className="container">
            <h1>Sudoku</h1>
            <NavLink to="/game" className="link">Play</NavLink>
        </div>
    )
}
export default Menu