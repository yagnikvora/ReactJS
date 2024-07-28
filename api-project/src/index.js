import React from 'react';
import ReactDOM from 'react-dom/client';
import Vehicledetails from './Components/Vehiclesdetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VehicleById from './Components/Vehiclebyid';
import Vehicleadd from './Components/Vehicleadd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/vehicle" element={<Vehicledetails />} />
        <Route path="/vehicle/:id" element={<VehicleById />} />
        <Route path="/vehicle/add" element={<Vehicleadd />} />
        <Route path="/vehicle/edit/:id" element={<Vehicleadd />} />
      </Routes>
    </BrowserRouter>
  </>
);
