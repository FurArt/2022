import {Routes, Route} from 'react-router-dom'
import Home from './routes/home'
import './App.css';
import './main.styles.scss'


function App() {
   return (
    <Routes>
      <Route path='/' element={<Home />} />
      
    </Routes>
  );
}

export default App;
