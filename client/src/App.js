import "./App.css";
import Hero from "./Hero";
import Nav from "./Nav";
import ProductList from "./Cards";
import TopRated from "./TopRated";
import Categories from "./Categories";
import CeramicWorkshopDetails from "./Workshop";
import Catalog from "./Catalog";
import { AuthProvider } from "./AuthContext";
import Modal from "./LoginModal";
import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Footer from "./Components/Footer";
import CatCatalog from "./CatCatalog";
import ProductDashboard from "./admin/Products";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Nav />
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <Routes>
          <Route exact path="/" element={<ProductDashboard />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route path="/catalog/:id" element={<CatCatalog />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AuthProvider>
  );
}

export default App;
