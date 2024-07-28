import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout2 from './Components/Layout2';
import About from './Components/About';
import Contact from './Components/Contact';
import Faculty from './Components/Faculty';
import Faculty10 from './Components/Faculty10';
import Counter from './Components/Conter';
import Form from './Components/Form';
import Updateform from './Components/UpdateForm';
import Apidemo from './Components/Apidemo';
import Apigetbyid from './Components/Apigetbyid';
import Apiaddedit from './Components/Apiaddedit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout2 />} >
          <Route index element={<h1>Hello</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/exp10+faculty" element={<Faculty10 />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<Form />} />
          <Route path="/updateform" element={<Updateform />} />
          <Route path="/api" element={<Apidemo />} />
          <Route path="/api/:id" element={<Apigetbyid />} />
          <Route path="/api/edit/:id" element={<Apiaddedit />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);