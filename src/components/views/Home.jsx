import '../../App.css';
import Base from '../footer/Feet';
// Correctly import the image as a module
// import bgImage from '../../assets/ce_bg1.png';
import Hitchcock from '../dollyZoom/vertigo';


const Home = () => {
  return (
    <>
    <header>
    <h1 className="text-4xl font-bold text-white">Welcome to the Home Page</h1>
    </header>
      <Hitchcock className="relative" />
      <footer>
        <Base/>
      </footer>
    </>
  );
}

export default Home;


/* <div className="h-screen bg-stripes opacity-25">
      <div className="flex items-center justify-center h-full"></div>


      lfeit75w120v
    </div> */