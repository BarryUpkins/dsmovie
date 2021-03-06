import NavBar from 'components/navbar';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listing from './pages/listing';
import Form from './pages/form';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
