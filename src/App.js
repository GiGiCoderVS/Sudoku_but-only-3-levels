
import './App.css';
import BaseRouter from './router';

function App (props) {
  return (
    <div className="App">
      <BaseRouter state={props.state} dispatch={props.dispatch} />
    </div>
  );
}

export default App;
