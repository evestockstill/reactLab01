import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Characters from './Characters';
import CharacterItem from './CharacterItem';


export default class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Characters />
        <Footer />
      </>
    );
  }
}
          
          
