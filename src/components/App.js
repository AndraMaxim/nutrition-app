import React from 'react';
import Header from './elements/Header';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';

import { GlobalStyle } from './styles/GlobalStyle';


const App = () => (
      <>
          <Header />
          <HeroImage />
          <SearchBar />
          <GlobalStyle />
      </>
);

export default App;
