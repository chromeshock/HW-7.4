import React, { Component } from 'react';
import Nav from './components/Nav';
import Article from './components/Article';
import Article2 from './components/Article2';
import images from './static/Images';


class Header extends Component {
  render() {
      return (
          <header>
              {/* Add JSX code here */}
          </header>
      );
  }
}

class MainContent extends Component {
  render() {
      return (
          <main>
              <section>
                <Article /> 
                <Images />
                <Article2 />
                <Images />
              </section>
          </main>
      );
  }
}

class App extends Component {
  render() {
      return (
          <div>
              <Header />
              <Nav />             
              <MainContent />
              <Images />
              <Footer />
          </div>
      );
  }
}

class Footer extends Component {
  render() {
      return (
          <footer>
              {/* Add JSX code here */}
          </footer>
      );
  }
}


class Images extends Component {
  render() {
    return (
      <div>
        <img src={images.image1} alt="image1" />
        <img src={images.image2} alt="image2" />
      </div>
    );
  }
}

export default App;
