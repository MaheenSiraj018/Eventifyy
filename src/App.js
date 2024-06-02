import MainPage from './pages/MainPage/MainPage';
import ChatPage from './pages/ChatPage/ChatPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact Component={MainPage} />
      <Route path='/chat' Component={ChatPage} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
