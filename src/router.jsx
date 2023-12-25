import { Routes, Route } from "react-router-dom";
import GameHOK from "./containers/GameHOK";
import Menu from "./components/Menu";
import Won from "./components/WonGame";
import Lose from "./components/LoseGame";

const BaseRouter = props => {
    return(
        <Routes>
            <Route path="/game" element={<GameHOK state={props.state} dispatch={props.dispatch} />} />
            <Route path="/" element={<Menu />} />
            <Route path="/won" element={<Won />} />
            <Route path="/lose" element={<Lose />} />
        </Routes>
    )
}
export default BaseRouter


