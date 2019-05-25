import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Header from './Header';
import Meta from './Meta';
import Footer from './Footer';
import Theme from './Theme';
import GlobalStyle from './Global';
import media from './MediaQueries';

const StyledPage = styled.div`
  height: 100%;
  color: ${props => props.theme.bodyText};
  main {
    background-color: ${props => props.theme.mainBackground};
    ${media.brotherbear`
      min-height: 50rem;
   `}
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          <a href="#main-content" className="main__content--link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" role="main">
            {this.props.children}
          </main>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
