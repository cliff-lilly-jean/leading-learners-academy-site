import './App.scss';
import heroKids from './assets/images/Home/header-baby.png';
import cloud from './assets/images/Home/cloud-01.png';


function App() {

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-content__left">
            <span className="hero-sub-title">{/* Subhead (small, orange color) */}A place to flourish and grow</span>
            <h1 className='hero-title'>{/* Title */}Leading Learners Academy</h1>
            <p className="hero-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptatum magni cumque animi repudiandae suscipit eveniet quo ex cum minus.</p>
            <button className='hero-cta'>
              Get Started
            </button>
          </div>
          <div className="content__right">
            <div className="hero-img">
              <img src={heroKids} alt="" />
            </div>
          </div>
        </div>
        <div className="cloud">
          <img src={cloud} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
