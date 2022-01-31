import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Nav from './components/nav';
import AddEmployee from './pages/add-employee';
import Employees from './pages/employees';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/update" element={<h1>update Pavan</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
