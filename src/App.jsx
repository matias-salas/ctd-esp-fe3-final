import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Routing from "./routes/Routing";

import "./App.css"; // Asegúrate de importar tu archivo CSS aquí

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
