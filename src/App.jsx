import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import Box from './components/views/FigmaTest';
// import About from './pages/About';


function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Box/>} />
        {/* <Route path="/" element={<Home/>} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
    </>
  );
}

export default App;