import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Content from './components/Content/content';
import { FilterContextProvider } from './contexts/filter-context';
import { ProductsList } from './components/products/products-list';
import { FilterBar } from './components/Filter/filter-bar';

function App() {
  return (
    <>
      <FilterContextProvider>
        <Header />
        <FilterBar/>
        <Content />
        <Footer />
      </FilterContextProvider>
    </>
  )
}

export default App
