import React from 'react';
import {
  createBrowserRouter,RouterProvider
} from 'react-router-dom';

import './App.css';

import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';

const router = createBrowserRouter([
  { path: '/about', element: <About/> },
  { path: '/', element: <Home/> },
  { path: '/contact', element: <ContactUs/> },
  
  
]);


function App() {
  return (
    <>
    <RouterProvider router={router} />;
   
      </>
  );
}

export default App;
