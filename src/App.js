import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import View from './component/View';
import Form from './component/Form';

function App() {
  return (
    
    <div>
            <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/table/view/:id" element={<View />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
