import logo from './logo.svg';
import './App.css';
import profPic from './resources/prof.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="header-img" src={profPic} alt="" />
        <div class="header-page-links">
          <p>
            Projects
          </p>
          <p>
            Work Experience
          </p>
          <p>
            Hobbies
          </p>
          <p>
            Contact Me
          </p>
        </div>
      </header>
      <div className="home-body">
      </div>
    </div>
  );
}

export default App;
