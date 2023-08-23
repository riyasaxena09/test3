import Form from "./components/Form";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Header from "./components/header";
function App(){
  
  return (
    <>
   <Header></Header>
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<div><Form></Form></div>}></Route>
  <Route path='/Cart' element={<div><Cart></Cart></div>}></Route>
  <Route path='/Product' element={<div><Product></Product></div>}> 
  </Route>
  </Routes>
  </BrowserRouter>

    </>
  )
}
export default App;