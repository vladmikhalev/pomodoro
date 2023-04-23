import React from 'react';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Main } from './shared/Main';



function App() {


  return (
    <>
      <Header />
      <Main >
        <Content />
      </Main>
    </>
  );
}

export default App;
