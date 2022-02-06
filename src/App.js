
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Compiler from './Component/Compiler';
import QuestionList from './QuestionList/QuestionList';
import Home from './Component/Home';
import Header from './Component/Header';

function App() {
  return (
    <BrowserRouter>
     <Header/>
    <div className="App"></div>

    <Routes>
    <Route  path='/Home' element={<Home />} />
    <Route  path='/QuestionList' element={<QuestionList />} />
    <Route  path='/Compiler/:id' element={<Compiler />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
