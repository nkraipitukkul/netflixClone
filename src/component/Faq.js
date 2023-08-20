import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FaqPage from '../linkPage/FaqPage';
import MediaPage from '../linkPage/MediaPage';
import './Faq.css';

const Faq = () => {
  return (
    <Router>
      <div className="faqMain">
        <div className="faqArea">
          <div className="faqCall">
            <p>
              Questions? Call{' '}
              <span style={{ textDecoration: 'underline' }}>1-800-012-298</span>
            </p>
          </div>
          <div className="faqLink">
            <div className="firstColumn">
              <Link to="/FaqPage" target="_blank">FAQ</Link>
              <Link to="/MediaPage" target="_blank">Media Center</Link>
              <Link>Redeem Gift Cards</Link>
              <Link>Terms of Use</Link>
              <Link>Corporate Information</Link>
              <Link>Legal Notices</Link>
            </div>
            <div className="secondColumn">
              <Link>Help Center</Link>
              <Link>Investor Relations</Link>
              <Link>Buy Gift Cards</Link>
              <Link>Privacy</Link>
              <Link>Contact Us</Link>
              <Link>Only on Netflix</Link>
            </div>
            <div className="thirdColumn">
              <Link>Account</Link>
              <Link>Jobs</Link>
              <Link>Ways to Watch</Link>
              <Link>Cookie Preferences</Link>
              <Link>Speed Test</Link>
            </div>
          </div>
          <div className="faqSubHeader">
                    <select className="dropDown">
                        <option>English</option>
                        <option>ไทย</option>
                    </select>
                    <p>Netflix Thailand</p>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Faq;
