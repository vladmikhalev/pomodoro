import React from 'react';
import { Content } from './pages/Content';
import { Header } from './shared/Header';
import { Main } from './shared/Main';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from './shared/NotFound';
import { Statistics } from './pages/Statistics';
import { getTimestampDay } from './utils/function/getTimestampDay';
import { useAppDispatch, useAppSelector } from './hooks/hook';
import { updateList } from './store/statisticsSlice';



function App() {
  const dispatch = useAppDispatch();
  const daysList = useAppSelector(state => state.statistics);

  React.useEffect(() => {
    checkStore();
  }, []);

  function checkStore() {
    const timestamp = getTimestampDay(new Date());
    if (daysList[0].timeStamp !== timestamp) {
      dispatch(updateList());
    } else {
      return;
    }
  }


  return (
    <>
      <BrowserRouter>
        <Header />
        <Main >
          <Routes>
            <Route path="/" element={<Navigate to="/timer" />} />

            <Route path="/timer/*" element={<Content />} />

            <Route path="/statistics/*" element={<Statistics />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  );
}

export default App;
