import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import MeetingAgendaPreview from './components/preview';
import './layout.scss';


const Footer = styled.footer`
  padding: 4rem;
  text-align: center;
  p {
    color: #5a5a5a;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  a {
    font-weight: 600;
    display: inline-block;
    color: #aaa;
    margin: 0 1rem;
    font-size: 1rem;
    text-decoration: none;
    border: 1px solid rgba(0,0,0, 0.08);
    padding: 0.5rem 1rem;
    transition: all 300ms linear;
    background-color: #fff;
    box-shadow: rgba(0,0,0, 0.02) 0 0.4rem 1;
    &:hover {
      color: #5a5a5a;
      border-color: #5a5a5a;
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
          <MeetingAgendaPreview />
          <Footer>
            <p>Made with <Love /> in Nepal.</p>
            <a target="blank" href="http://sarozpoddar.com.np">sarozpoddar.com.np</a>
            <a target="blank" href="https://github.com/saroz">github</a>

          </Footer>
      </div>
  );
}
App.propTypes = {
  //
}

export default App;
