import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './contexts/UserContext';
import { GlobalStyle } from './styles/global';
import { TypographyStyle } from './styles/typography';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle/>
        <TypographyStyle/>
        <App />
        <ToastContainer
          autoClose={1700}
          theme="dark"
        />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
