import './App.css';
import WindowContainer from './components/window-container';

function App(children) {
  return (
    <div className="App">
      <WindowContainer>
        <h1>Zikun Wang</h1>
      </WindowContainer>
    </div>
  );
}

export default App;
