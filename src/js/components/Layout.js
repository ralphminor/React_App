import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout  extends React.Component {
  constructor() {
    super()
    this.name="Ralph-E-Boy 1";
  }
  render() {
    return (
      <div>
        <Header/>
          <h1>It works!</h1>
        <Footer/>
      </div>
    );
  }
}
