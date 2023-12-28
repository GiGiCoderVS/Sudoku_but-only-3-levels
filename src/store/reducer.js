import { CHANGE_VALUE, NEXT_LVL, RESTART_LVL } from "./actionTypes"

const data = {
    level: 0,
    matrixData: [
        [
            [
                [1, 2, 3, 5, 4, 6],
                [6, 5, 4, 3, 1, 2],
                [2, 6, 1, 4, 5, 3],
                [4, 3, 5, 6, 2, 1],
                [3, 4, 2, 1, 6, 5],
                [5, 1, 6, 2, 3, 4]
            ],
            [
                [0, 2, 3, 0, 4, 6],
                [0, 5, 4, 3, 1, 2],
                [2, 6, 1, 0, 0, 0],
                [0, 3, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0],
                [5, 0, 0, 0, 0, 4]
            ]
        ],
        [
            [
                [4, 6, 3, 1, 2, 5],
                [1, 2, 5, 3, 4, 6],
                [5, 1, 6, 4, 3, 2],
                [2, 3, 4, 5, 6, 1],
                [6, 4, 1, 2, 5, 3],
                [3, 5, 2, 6, 1, 4]
            ],
            [
                [0, 0, 0, 1, 2, 0],
                [1, 2, 5, 0, 4, 0],
                [0, 0, 0, 4, 3, 2],
                [0, 0, 4, 0, 0, 0],
                [0, 4, 1, 2, 5, 3],
                [3, 0, 0, 0, 0, 0]
            ]
        ],
        [
            [
                [2, 1, 5, 3, 4, 6],
                [6, 4, 3, 1, 2, 5],
                [1, 3, 2, 5, 6, 4],
                [5, 6, 4, 2, 1, 3],
                [4, 5, 1, 6, 3, 2],
                [3, 2, 6, 4, 5, 1]
            ],
            [
                [2, 0, 5, 3, 4, 0],
                [0, 4, 3, 0, 0, 0],
                [0, 3, 0, 0, 6, 0],
                [5, 6, 0, 2, 0, 0],
                [4, 5, 1, 0, 0, 0],
                [0, 2, 0, 0, 0, 1]
            ]
        ],
    ]
}
const initialState = {
    mistakes: 0,
    valuesData: [1, 2, 3, 4, 5, 6],
    matrixData: {
        start: JSON.parse(JSON.stringify((data.matrixData[data.level][1]))),
        end: data.matrixData[data.level][0],
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALUE:
            let newState = {
                ...state,
                matrixData: { ...state.matrixData, start: [...state.matrixData.start] }
            }
            if (newState.matrixData.end[action.indexArr[0]][action.indexArr[1]] === +action.value) {
                newState.matrixData.start[action.indexArr[0]][action.indexArr[1]] = +action.value
            }else{
                newState.mistakes++
            }
            return newState
        case NEXT_LVL:
            data.level = (data.level + 1) % data.matrixData.length
            return{
                ...state,
                matrixData: {
                    ...state.matrixData,
                    start: JSON.parse(JSON.stringify((data.matrixData[data.level][1]))),
                    end: data.matrixData[data.level][0],
                },
                mistakes: 0,
            }
        case RESTART_LVL:
            return{
                ...state,
                matrixData: {
                    ...state.matrixData,
                    start: JSON.parse(JSON.stringify((data.matrixData[data.level][1]))),
                    end: data.matrixData[data.level][0]
                },
                mistakes: 0,
            }
        default:
            return state
    }
}
export default reducer