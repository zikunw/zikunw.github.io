import './App.css';
import me from './me.jpg';
import WindowContainer from './components/window-container';

function App(children) {
  return (
    <div className="App">
      <WindowContainer>
        <h1>Zikun Wang</h1>
        <p>Hello, I am a Computer Science student in Boston University.</p>
        <img className="my-photo" src={me} alt="Me"></img>
        <p>LinkedIn: <a href="http://www.linkedin.com/in/zikunw">Zikun Wang</a></p>
        <p>Github: <a href="https://github.com/zikunw">@zikunw</a></p>
      </WindowContainer>
    </div>
  );
}

export default App;
