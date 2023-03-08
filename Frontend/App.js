import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Appbar from './components/Appbar';
import Delete from './components/Delete';
import Diary from './components/Diary';
import Update from './components/Update';
import Dis from './components/Get';
import "./App.css"
function App() {
  return (
    <>
      <Router>
        <button>
          <Link to='/get' className='btn'>GET</Link>
        </button>
        <button>
          <Link to='/update' className='btn'>UPDATE</Link>
        </button>
        <button>
          <Link to='/delete' className='btn'>DELETE</Link>
        </button>
        <button>
          <Link to='/post' className='btn'>POST</Link>
        </button>

        <Routes>

              <Route path='/delete' element={<Delete/>}/>
              <Route path='/update' element={<Update/>}/>
              <Route path='/post' element={<Diary/>}/>
              <Route path='/get' element={<Dis/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
