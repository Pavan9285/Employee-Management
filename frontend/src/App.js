import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Nav from './components/nav';
import AddEmployee from './pages/add-employee';
import Employees from './pages/employees';

function App() {
  return (
    <div id="page-container">
      <div className='content-wrap'>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route path="/employee/add" element={<AddEmployee />} />
            <Route path="/employee/:id/edit"
              element={<AddEmployee />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
