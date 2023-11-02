import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import ShopInventory from './components/ShopInventory'
import Create from './components/Create'
import Edit from './components/Edit'
import Nav from './components/Nav'
import Company from './components/Company'
import View from './components/View'
// import images from './assets/images'

function App() {

  // const images = [
  //   'IMG_0002.JPG',
  //   'IMG_0005.JPG',
  //   'IMG_0006.JPG',
  //   'IMG_0008.JPG',
  //   'IMG_0009.JPG',
  //   'IMG_0010.JPG',
  //   'IMG_0011.JPG',
  //   'IMG_0012.JPG',
  //   'IMG_0013.JPG',
  //   'IMG_0014.JPG',
  //   'IMG_0015.JPG',
  //   'IMG_0016.JPG',
  //   'IMG_0017.JPG',
  //   'IMG_0018.JPG',
  //   'IMG_0019.JPG',
  //   'IMG_0021.JPG',
  //   'IMG_0022.JPG',
  //   'IMG_0023.JPG',
  //   'IMG_0024.JPG',
  //   'IMG_0025.JPG',
  //   'IMG_0026.JPG',
  //   'IMG_0027.JPG',
  //   'IMG_0028.JPG',
  //   'IMG_0029.JPG',
  //   'IMG_0030.JPG',
  //   'IMG_0031.JPG',
  //   'IMG_0032.JPG',
  //   'IMG_0033.JPG',
  //   'IMG_0034.JPG',
  //   'IMG_0035.JPG',
  //   'IMG_0036.JPG',
  //   'IMG_0038.JPG',
  //   'IMG_0039.JPG'
  // ]


  return (
    <>
    <div className='App'>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route index element={ <ShopInventory/> } />
          <Route path="/create" element={ <Create/> } />
          <Route path="/edit/:id" element={ <Edit/> } />
          <Route path="/view/:id" element={ <View/> } />
          <Route path="/company" element={ <Company/> } />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
