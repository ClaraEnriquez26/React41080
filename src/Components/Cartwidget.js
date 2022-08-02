import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Cart } from 'react-bootstrap-icons';

const Cartwidget = ()  => {
    return (
        <>
         <div> 
         <Cart color='white'/>
            <a className="numberCart">
              6
            </a>
         </div> 
         </>
    )
  }

export default Cartwidget;