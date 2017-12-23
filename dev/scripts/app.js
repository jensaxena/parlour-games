import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Main from './main';
import Footer from './footer';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div> // .wrapper
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
