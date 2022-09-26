import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import BoarderDetail from './components/boarders/BoarderDetail';
import BoarderCreate from './components/boarders/BoarderCreate';
import BoarderEdit from './components/boarders/BoarderEdit';

function App() {
  return (
    <> 
      <Router>
      <NavigationBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<BoarderCreate/>}/>
          <Route path='/edit/:id' element={<BoarderEdit/>}/>
          <Route path='/boarders/:id' element={<BoarderDetail/>}/>
        </Routes>
      </Router>
    </>    
  );
}

export default App;
