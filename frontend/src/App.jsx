import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import About from './pages/About'
import Contact from './pages/Contact'
 import Login from './pages/login'
import Order from './pages/order'
import Placeorder from './pages/placeorder'
import Product from './pages/product'
import Navbar from './components/Navbar';
import Latestcollection from './components/Latestcollection';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
 import { ToastContainer, toast } from 'react-toastify';
  
const App = () => {
  return (
   <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
    <Navbar/>
    <Searchbar/>
    <Routes>
 <Route path='/'element= {<Home/>} />
<Route path='/collection' element={<Collection/>}/>
<Route path='/Cart' element={<Cart/>} />
<Route path= '/about' element={<About/>} />
<Route path ='/contact' element={<Contact/>} />
<Route path= '/login'element={<Login/>} />
<Route path='/order'element ={<Order/>} />
<Route path= '/placeorder' element={<Placeorder/>}/>
<Route path='/products/:productId' element ={<Product/>} />
<Route path='/latestcollection' element ={<Latestcollection/>} />

  </Routes>  
  <Footer/>
    </div>
  )
}

export default App;