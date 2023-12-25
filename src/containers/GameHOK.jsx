import Game from "../components/Game"

const GameHOK = props => {
    return (
        <Game
            dispatch={props.dispatch}
            mistakes={props.state.mistakes}
            valuesData={props.state.valuesData}
            matrixData={props.state.matrixData.start} />
    )
}
export default GameHOK