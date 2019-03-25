import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from './components/header';
import MeetingAgendaPreview from './components/preview';
import './layout.scss';


const Footer = styled.footer`
  padding: 4rem;
  text-align: center;
  a {
    color: #007bff;
    display: inline-block;
    margin: .5rem;
    font-size: 1.5rem;
    text-decoration: none;
    &:hover {
      border-bottom: 1px solid;
    }
  }
  @media print {
    display: none;
  }
`;
const Love = styled.span`
  background-color: red;
  height: 1rem;
  transform: rotate(-45deg);
  width: 1rem;
  position: relative;
  display: inline-block;
  margin: .4rem .4rem 0;
  &::before,
  &::after {
    content: "";
    background-color: red;
    border-radius: 50%;
    height: 1rem;
    position: absolute;
    width: 1rem;
  } 
  &::before {
    top: -0.5rem;
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
          <Header siteTitle="Zero Meetings" />
          <MeetingAgendaPreview />
          <Footer>
            <p>Made with <Love /> in Nepal</p>
            <a target="_new" href="http://sarozpoddar.com.np">sarozpoddar.com.np</a>
            <a target="_new" href="https://github.com/saroz">github(@saroz)</a>

          </Footer>
      </div>
  );
}
App.propTypes = {
  //
}

export default App;
