import React from 'react';
import './style.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import SearchBar from './SearchBar'

export default function App() {
  

  return (
    <div className="mainContainer">
      <div>
        <Header />
      </div>
      <div><SearchBar/> </div>
      <div>
        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
