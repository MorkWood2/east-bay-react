import React from 'react';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

import Intro from '../intro/intro.component';
import Footer from '../footer/footer.component';
import './main.styles.scss';

const Main = () => {
  return (
    <div>
      <div className='header-top'></div>
      <div className='logo-wrapper'>
        <ReactLogo className='logo' />
      </div>
      <Intro />
      <Footer />
    </div>
  );
};

export default Main;
