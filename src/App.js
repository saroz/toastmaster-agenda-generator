import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MeetingAgendaPreview from './components/preview';
import TimerCard from './components/timer';
import HelpCard from './components/help';
import NavBar from './components/nav';
import './layout.scss';

const SM = '767px'
const Footer = styled.footer`
  padding: 4rem;
  display: flex;
  text-align: center;
  justify-content: center;
  p {
    font-size: 1rem;
    color: #5a5a5a;
    margin-right: 2rem;
    font-weight: bold;
  }
  a {
    display: inline-block;
    color: #007bff;
    margin: 0 .5rem;
    font-size: 1rem;
    text-decoration: none;
    border-bottom: 1px solid;
    padding: 0;
    transition: all 300ms linear;
    &:hover {
      color: #000;
    }
  }
  @media print {
    display: none;
  }
  @media only screen and (max-width: ${SM}) {
    padding-top: 2rem
    padding-bottom: 8rem;
  }
`;
const Love = styled.span`
  background-color: red;
  height: 8px;
  width: 8px;
  transform: rotate(-45deg);
  position: relative;
  display: inline-block;
  margin: 2px 2px 0;
  &::before,
  &::after {
    content: "";
    background-color: red;
    border-radius: 50%;
    height: 8px;
    position: absolute;
    width: 8px;
  } 
  &::before {
    top: -4px;
    left: 0;
  }
`;

function App() {
  return (
      <div className="App">
          <Helmet>
              <title>Generate Toastmasters Club Meeting Agenda for Free, No Signup Required</title>
              <meta name="description" content="Generate Toastmasters Club Meeting Agenda for Free, No Signup Required" />
          </Helmet>
          <Router>
            <NavBar />
            <Route path="/" exact component={MeetingAgendaPreview} />
            <Route path="/timer/" component={TimerCard} />
            <Route path="/help/" component={HelpCard} />
          </Router>
          <Footer>
            <p>Made with <Love /> in Nepal.</p>
            <a rel="noopener" target="blank" href="https://optimumfuturist.com/">Zero Meeting</a>
            <a rel="noopener" target="blank" href="https://github.com/saroz/agenda-generator">github</a>
          </Footer>
      </div>
  );
}
App.propTypes = {
  //
}

export default App;
