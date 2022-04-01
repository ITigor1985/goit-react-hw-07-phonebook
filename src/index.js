import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import reportWebVitals from './reportWebVitals';

import Contacts from 'components/Contacts';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-07-phonebook/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
