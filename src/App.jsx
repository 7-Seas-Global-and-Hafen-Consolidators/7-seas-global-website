import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PoliticaPrivacidade from './components/PoliticaPrivacidade';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<PoliticaPrivacidade />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}