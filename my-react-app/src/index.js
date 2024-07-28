import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import HomePage from './Components/Content';

function College(props) {
  const divStyle = {
    color: '#156860',
    backgroundColor: 'lightblue',
    fontSize: '15px',
    padding: '74px',
  };
  return (
    <div style={divStyle}>
      {<h1>{props.name} from - {props.city}</h1>}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='container-fluid'>
      {/* Header */}
      <div className='row'>
        <Header />
      </div>
      {/* Content */}
      <div className='row'>
        {/* Sidebar */}
        <div className='col-2 p-0'>
          <Sidebar />
        </div>
        {/* Body */}
        <div className="col p-0">
          <HomePage />
          <College name="Darshan University" city="rajkot" />
        </div>
      </div>
      {/* Footer */}
      <div className='row'>
        <Footer />
      </div>
    </div >
  </>
);