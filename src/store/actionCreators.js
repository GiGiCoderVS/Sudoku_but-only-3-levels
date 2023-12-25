import { CHANGE_VALUE, NEXT_LVL, RESTART_LVL } from "./actionTypes"

export const changeValueAC = (indexArr, value) => {
    return {
        type: CHANGE_VALUE,
        indexArr,
        value,
    }
}
export const nextLevel = () => {
    return {
        type: NEXT_LVL,
    }
}
export const restartLevel = () => {
    return {
        type: RESTART_LVL,
    }
}