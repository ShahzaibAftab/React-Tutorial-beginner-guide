
import './App.css';
import Card from '../src/components/Card.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/custom' element={<Card />} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
