
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Routing from "./routes/Routing";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routing />
      </main>
      <Footer />
    </>
  );
}

export default App;
