import React from 'react'
import Boton from './components/Boton/Boton';
import ItemCount from './components/ItemCount/ItemCount';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {
  

  return (
    

    <>
    <BrowserRouter>

    <NavBar/>


    <Routes>

      <Route path='/' element={ <ItemListContainer/> }/>
      <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
      <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>

    </Routes>


    <ItemDetailContainer/>

    </BrowserRouter>
    
    </>
  )
}

export default App