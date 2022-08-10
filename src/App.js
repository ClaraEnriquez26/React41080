import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer'
import DetailContainer from './Components/DetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './Context.js/CartContext'
import { UserContextProvider } from './Context.js/UserContext';

 // const Cart = ({ cartItems = [] }) => {
  //  console.info('Cart updated:', cartItems)
  //  return (
  //  <div className="App">
    //  <h1>Bienvenidos a</h1>
   //   <h2>VeganShop</h2>
    //  {cartItems.length > 0 && (cartItems.map(cartItem => (<div>
    //    {cartItem.product.title + " x " + cartItem.qty}
    //  </div>)))
   //   }
  //  <hr />
  //  </div>
 // )}

  function App() {

 // const [cart, updateCart] = useState([])
// const addToCart = ({product, qty}) => {
   // const newCartItem = { product, qty };
   // const cartItem = cart.find(x => x.product.id === product.id)

    // retorna antes y la ejecucion de la funcioncion termina en el bloque del if: early return
   // if(!cartItem) {
    //  return updateCart([...cart, newCartItem])
    //} 

   // cartItem.qty = qty;
   // const cartWithItem = cart.filter(x => x.id === product.id)
   // updateCart([...cartWithItem, cartItem])
  //}


  return (
    <>
    <UserContextProvider>
    <CartContextProvider>
    <BrowserRouter>
      <Navbar />
          <Routes>
          <Route path='/' element={<ItemListContainer greeting= {"Todos nuestros productos"} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting= {`Cargando productos`} />} />
          <Route path='/detail/:productId' element={<DetailContainer/>} />
          <Route path='/cart' element={<h4>CART</h4>} />
          </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </UserContextProvider>
    </>
  );
  }

export default App;