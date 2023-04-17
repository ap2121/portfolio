
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
