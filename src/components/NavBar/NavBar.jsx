import CardWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <header>

      <Link to={"/"}>
        <h1 className="titulo"> Shibuya<span class="clothes">Clothes</span></h1>
      </Link>

        <nav className="navbar">
            <ul>

                <li> 
                  <NavLink to="/">
                    Home 
                  </NavLink>
                </li>

                <li> 
                  <NavLink to="categoria/2">
                    Remeras 
                  </NavLink>
                </li>

                <li> 
                  <NavLink to="categoria/1">
                    Buzos 
                  </NavLink>
                </li>
            </ul>
        </nav>


        <CardWidget/>


    </header>
  )
}

export default navbar