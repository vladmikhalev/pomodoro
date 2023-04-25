import React from 'react';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Main } from './shared/Main';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from './shared/NotFound';



function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Main >
          <Routes>
            <Route path="/" element={<Navigate to="/timer" />} />

            <Route path="/timer/*" element={<Content />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  );
}

export default App;
