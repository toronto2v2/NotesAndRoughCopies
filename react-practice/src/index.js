import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import styled from 'styled-components'
import { Button } from './App';


const BigButton = styled(Button)`
  width: 250px;
  height:50px;
  text-align: center;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BigButton as ='a'>++++</BigButton>
  </React.StrictMode>
);

