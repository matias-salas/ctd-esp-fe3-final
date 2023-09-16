import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/Context'


return (
  <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Navbar/>
      <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/recipe/:id' element={<Detail/>}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/favs' element={<Favs/>}/>          
          </Routes>
        </main>
      <Footer/>
  </div>
);


export default App;
