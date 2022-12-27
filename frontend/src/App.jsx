import './App.scss';
import heroKids from './assets/images/Home/header-baby.png';
import cloud from './assets/images/Home/cloud-01.png';


function App() {

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-content__left mt">
            <span className="hero-sub-title">A place to flourish and grow</span>
            <h1 className='hero-title'>Leading Learners <span className='orange-txt'>Academy</span></h1>
            <p className="hero-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptatum magni cumque animi repudiandae suscipit eveniet quo ex cum minus.</p>
            <button className='hero-cta'>
              Get Started
            </button>
          </div>
          <div className="content__right">
            <div className="hero-img">
              <img src={heroKids} alt="kids with graduation caps on" />
            </div>
          </div>
        </div>
        <div className="cloud">
          <img src={cloud} alt="a white cloud" />
        </div>
      </div>
    </div>
  );
}

export default App;
