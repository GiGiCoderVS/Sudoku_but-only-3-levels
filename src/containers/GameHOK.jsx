import { connect } from "react-redux"
import Game from "../components/Game"
import { changeValueAC, nextLevel, restartLevel } from "../store/actionCreators"

const mapStateToProps = state => {
    return {
        mistakes: state.game.mistakes,
        valuesData: state.game.valuesData,
        matrixData: state.game.matrixData.start,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeValue(indexArr, value) {
            const action = changeValueAC(indexArr, value)
            dispatch(action)
        },
        nextLevel() {
            dispatch(nextLevel())
        },
        restartLevel() {
            dispatch(restartLevel())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game)