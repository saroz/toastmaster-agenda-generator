import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import MeetingAgendaPreview from './components/preview';
import './layout.scss';


const Footer = styled.footer`
  padding: 4rem;
  text-align: center;
  p {
    font-size: 1rem;
    color: #5a5a5a;

    font-weight: bold;
    margin-bottom: .6rem;
  }
  a {
    display: inline-block;
    color: #007bff;
    margin: 0 1rem;
    font-size: 1rem;
    text-decoration: none;
    border-bottom: 1px solid;
    padding: 0.2rem 0;
    transition: all 300ms linear;
    &:hover {
      color: #000;
    }
  }
  @media print {
    display: none;
  }
`;
const Love = styled.span`
  background-color: red;
  height: .8rem;
  width: .8rem;
  transform: rotate(-45deg);
  position: relative;
  display: inline-block;
  margin: .2rem .2rem 0;
  &::before,
  &::after {
    content: "";
    background-color: red;
    border-radius: 50%;
    height: .8rem;
    position: absolute;
    width: .8rem;
  } 
  &::before {
    top: -0.4rem;
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
            <a rel="noopener" target="blank" href="https://sarozpoddar.com.np">sarozpoddar.com.np</a>
            <a rel="noopener" target="blank" href="https://github.com/saroz">github</a>

          </Footer>
      </div>
  );
}
App.propTypes = {
  //
}

export default App;
