import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footers from '../Footer/Footers';
import styles from './App.module.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
  <Router>
    <div className={styles.container}>
      <Header/>
      <Body/>
      <Footers/>
    </div>
    <Routes>
      <Route path='/' element={<Header/>} />
      <Route path='body' element={<Body/>} />
      <Route path='footer' element={<Footers/>} />
    </Routes>
  </Router>  
  );
};

export default App;