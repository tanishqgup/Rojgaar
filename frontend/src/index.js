import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Jobs from "./pages/jobs/Jobs";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import NotFound from "./pages/notFound/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
