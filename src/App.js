import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

import Layouts from './layouts'
import { THEME_CONFIG } from './configs/AppConfig';
import './lang'
// import mockServer from './mock'

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

// const environment = process.env.NODE_ENV

// if (environment !== 'production') {
// 	mockServer({ environment })
// }

function App() {
  return (
    <div className="App">
      <ThemeSwitcherProvider
        themeMap={themes}
        defaultTheme={THEME_CONFIG.currentTheme}
        insertionPoint="styles-insertion-point"
      >
        <Layouts />
      </ThemeSwitcherProvider>
    </div>
  );
}

export default App;
