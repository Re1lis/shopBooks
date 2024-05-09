  import './App.css';
  import Header from './components/Header/header';
  import { Route, Routes, useLocation } from 'react-router-dom';
  import { useTransition, animated } from '@react-spring/web'; 
  import Catalog from './components/Catalog/catalog';
  import BookPage from './components/BookPage/bookpage';
  import books from '../books.json';
  import Home from './components/HomePage/home';
  import Cart from './components/basket/basket';

  function App() {
    const location = useLocation();
    const transition = useTransition(location, {
      key: location.pathname,
      from: { 
        opacity: 0,
        transform: 'translateX(200%)',
        scale: '1'
      },
      enter: { 
        opacity: 1,
        transform: 'translateX(0%)',
        scale: '0.9'
      },
      leave: { 
        opacity: 0,
        transform: 'translateX(-100%)',
        scale: '1.1'
      },
    });


    return (
      <>
        <Header />
        
          {transition((props, item) => (
            <animated.div  style={props}>
              <div style={{position: 'absolute', width: '100%'}}>
                <Routes location={item}>
                  <Route path='/' element={<Home />}/>
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/books/:index" element={<BookPage books={books} />} />
                  <Route path='/basket' element={<Cart/>} />
                </Routes>
              </div>
            </animated.div>
          ))}
      </>
    );
  }

  export default App;
