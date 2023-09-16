import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from 'react-router-dom'
import { Home, Favs, Detail, Contact } from './pages'

import "./App.css"; // Asegúrate de importar tu archivo CSS aquí

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">

            <Routes>
                <Route path="/" element={<Home />}>
                  <Route path="home" element={<Home />} />
                </Route>
                <Route path='/dentist/:id' element={<Detail />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/favs' element={<Favs />} />
            </Routes>

      </main>
      <Footer />
    </div>
  );
}

export default App;
