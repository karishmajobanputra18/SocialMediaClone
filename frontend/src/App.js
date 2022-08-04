
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Homepage from './pages/Home/Homepage';

import LoginPage from './pages/Login/Login';
import Register from './pages/Register/Register';

import Navbar from './items/Navbar';

import { ChakraProvider } from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";
function App() {
  return (
    <div className="App">
<ChakraProvider>
    <BrowserRouter>
       <Navbar/>
     <div>
      <Routes>
      {/* <-- define multiple route components to take you to different pages--> */}
      <Route path="/" element={<Homepage/>}/> 
      
      <Route path="/pages/Register/Register" element={<Register/>}/>
      <Route path="/pages/Login/Login" element={<LoginPage/>}/>
      
     
      </Routes>
      </div>  
        
      
    </BrowserRouter> 
    </ChakraProvider>
    </div>
  );
}

export default App;

