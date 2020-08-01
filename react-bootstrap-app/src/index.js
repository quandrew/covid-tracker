import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './title/Title';
import Data from './data/Data';
import News from './news/News';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Title />
  </React.StrictMode>,
  document.getElementById('title')
);

ReactDOM.render(
  <React.StrictMode>
    <Data />
  </React.StrictMode>,
  document.getElementById('data')
);

ReactDOM.render(
  <React.StrictMode>
    <News />
  </React.StrictMode>,
  document.getElementById('news')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
