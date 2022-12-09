import './App.css';
import Header from './components/Header';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';
import ContextProvider from './components/context/GlobalContext';
function App() {
  return (
    <Router>
    <ContextProvider>
    <Header/>
    <Routes>
    <Route path='/' element={<WatchList/>}/>
    <Route path='/watched' element={<Watched/>}/>
    <Route path='/add' element={<Add/>}/>
    </Routes>
    </ContextProvider>
    </Router>
  );
}

export default App;
