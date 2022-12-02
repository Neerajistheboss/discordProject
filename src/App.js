import logo from "./logo.svg";
import "./App.css";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto">
        <ProjectsPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
