import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';

import './App.css';
import './styles/media-query.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import SingleEvent from './pages/single-event/SingleEvent';
import Footer from './layout/footer/Footer';

function App() {
  const [cookie] = useCookies(['token']);
  const token = cookie.token;
  const { pathname } = useLocation();

  const UserGuard = ({ token }) => {
    const location = useLocation();

    return token !== undefined ? (
      <Outlet />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  };

  return (
    <ChakraProvider theme={'dark'}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<UserGuard token={token} />}>
          <Route index element={<Home token={token} />} />
          <Route path="single-event" element={<SingleEvent token={token} />} />
        </Route>
      </Routes>
      {pathname === '/login' ? null : <Footer />}
    </ChakraProvider>
  );
}

export default App;
