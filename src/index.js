import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const NewApplication = () => {
  return <div>
    <Header />
    <Content />
    <br />
    <br />
    <br />
    <Footer />
  </div>
};

ReactDOM.render(<NewApplication />, document.getElementById('app'));
