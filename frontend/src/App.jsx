import './App.scss';

function App() {

  return (
    <div className="App">
      <div className="hero">
        <div className="flex-content">
          <div className="content__left">
            <span className="sub-title">{/* Subhead (small, orange color) */}A place to flourish and grow</span>
            <h1 className='title'>{/* Title */}Leading Learners Academy</h1>
            <p className="copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptatum magni cumque animi repudiandae suscipit eveniet quo ex cum minus.</p>
            <button className='cta'>
              Get Started
            </button>
          </div>
          <div className="content__right">
            <img src="./assets/images/Home/header-baby.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
