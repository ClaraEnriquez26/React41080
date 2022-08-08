import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Cartwidget = ()  => {

    return (
        <>
         <div> 
         <Link to='/cart'></Link>
         <Cart color='white'/>
            <a className="numberCart">
              6
            </a>
         </div> 
         </>
    )
  }

export default Cartwidget;