import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Question from './component/Question';
import Banner from './component/Banner';
import Enjoy from './component/Enjoy';
import Download from './component/Download';
import Watch from './component/Watch';
import Kid from './component/Kid';
import reportWebVitals from './reportWebVitals';
import Faq from './component/Faq';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MediaPage from './linkPage/MediaPage';
import FaqPage from './linkPage/FaqPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Switch>
      <Route path="/FaqPage">
        <FaqPage />
      </Route>
      <Route path="/MediaPage">
        <MediaPage />
      </Route>
      <Route path="/">
        <div className="cover">
          {/* Render your other components */}
          <Banner />
          <Enjoy />
          <Download />
          <Watch />
          <Kid />
          <Question />
          <Faq />
        </div>
      </Route>
    </Switch>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
