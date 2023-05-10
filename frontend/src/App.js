
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/pages/HomeScreen";
import { Routes, Route} from "react-router-dom";
import CarScreen from "./components/pages/CarScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path ="/" Component ={HomeScreen} exact/>
            <Route path= "/vehicle/:id" Component={CarScreen} exact/>
    
    

          </Routes>
       
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
