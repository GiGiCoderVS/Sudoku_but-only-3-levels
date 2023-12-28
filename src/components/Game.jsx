import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Game = props => {
    const navigate = useNavigate()
    const [indexArr, changeIndexArr] = useState([0, 0])
    const changeValue = (e) => {
        props.changeValue(indexArr, e.target.textContent)
    }
    const isWon = () => {
        for (const arr of props.matrixData) {
            if (arr.includes(0)) {
                return
            }
        }
        props.nextLevel()
        navigate("/won")
    }
    const isLose = () => {
        if (props.mistakes >= 5) {
            props.restartLevel()
            navigate("/lose")
        }
    }
    useEffect(() => {
        isLose()
        isWon()
    }, [props.matrixData, props.mistakes])
    const values = props.valuesData.map(value => {
        return (
            <li className="sudoku-field" key={value} onClick={changeValue}>{value}</li>
        )
    })
    const matrix = props.matrixData.map((tr, trIndex) => {
        return (
            <tr key={trIndex}>
                {
                    tr.map((td, tdIndex) => {
                        return (
                            <td
                                className={
                                    (trIndex === indexArr[0] && tdIndex === indexArr[1])
                                        ?
                                        "sudoku-field active-field"
                                        :
                                        "sudoku-field"
                                }
                                key={tdIndex}
                                onClick={() => changeIndexArr([trIndex, tdIndex])}>
                                {td || ''}
                            </td>
                        )
                    })
                }
            </tr>
        )
    })
    return (
        <div className="container">
            <table className="sudoku">
                <tbody>
                    {matrix}
                </tbody>
            </table>
            <ul className="value">
                {values}
            </ul>
            <div>
                Mistakes: {props.mistakes}/5
            </div>
        </div>
    )
}
export default Game