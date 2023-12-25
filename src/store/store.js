import reducer from "./reducer"

const store = {
    _state: reducer(),
    getState(){
        return this._state
    },
    dispatch(action){
        this._state = reducer(this._state, action)
        this._callSubscriber(this._state)
    },
    _callSubscriber(){
        //nothing! empty! yopt
    },
    subscriber(observer){
        this._callSubscriber = observer
    }
}
export default store
window.store = store