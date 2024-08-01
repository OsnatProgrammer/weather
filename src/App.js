import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/home/home'
import Login from './component/login/login'
import History from './component/history/history';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={() => { return <h1>העמוד שחיפשת אינו נמצא</h1> }} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
