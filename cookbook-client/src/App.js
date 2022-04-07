import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import Reciepe from './components/Reciepe';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
// const Login=()=> { return (<h1>Login</h1>)}
// const Signup=()=> {<h1>Signup</h1>}

return(
  <Router>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Reciepe />} />

      </Routes>
  </Router>
)
}

export default App;
