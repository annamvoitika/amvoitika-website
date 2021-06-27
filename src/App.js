import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import {About} from './About/About.js';
import {Header} from './Header/Header';
import {Skills} from './Skills/Skills';
import {Contact} from './Contact/Contact';

// const transition_style = cubic-bezier(0.65, 0, 0.35, 1);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  render() {
    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
          transitionTimingFunction={'cubic-bezier(.30,0,0.30,1)'}
        >
          <About />
          <Header />
          <Skills />
          <Contact />
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}


// export default App;
