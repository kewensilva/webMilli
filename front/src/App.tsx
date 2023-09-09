import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Content from './components/Content/content';
import { FilterContextProvider } from './contexts/filter-context';
// import { FilterBar } from './components/Filter/filter-bar';

import { Outlet } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <WelcomePage isOpen={open} setOpen={setOpen} />
      <FilterContextProvider>
        <Header />
        {/* <FilterBar /> */}
        <Content />
        <Outlet />
        <Footer />
      </FilterContextProvider>
    </>
  )
}

export default App
