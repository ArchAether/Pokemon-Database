import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          backgroundColor:"#00495c"
        }}
      >
        <Link to="/testpage"><b>Home</b></Link> |{" "}
        <Link to="/tablecomponent"><b>Pokedex</b></Link> |{" "}
        <Link to='/details'><b>Detail</b></Link>
      </nav>
      <div id='outletDiv'>
        <Outlet />
      </div>
      
    </div>
  )
}

export default App;