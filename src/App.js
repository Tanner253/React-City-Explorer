import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import './App.css';


/**
* @author
* @class 
**/

class App extends React.Component {
render() {
  return(
    <>
    <Header />
    <Main />
    <Footer />
    </>

    )
    //we need to send data to main
  }
}


export default App;