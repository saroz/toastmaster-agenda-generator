import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { SM } from './style';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import howtoMd from '../howto.md'
import { Main, SaveDataWrap } from './style';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

const Help = styled.div`
    background: #fff;
    box-shadow: rgba(0,0,0,.1) 0.4rem 0.7rem 9.3rem 0.3rem;
    padding: 5rem;
    margin: 0 auto;
    max-width: 119.0551181102rem;
    font-size: 1.5rem;    
    box-sizing: border-box;
    code {
        background-color: #fff0b6;
        border-radius: 3px;
        padding: 2px 4px;     
    }
    @media print {
        display: none;
    }
    @media only screen and (max-width: ${SM}) {
        padding: 1.5rem 1.5rem 3rem
        iframe {
            width: 100% !important;
        }
        pre {
            width: 100%;
            overflow-x: scroll;
        }
    }
`;


function HelpCard () {

    const [ howTo, setHowTo ] = useState(null);

    useEffect(() => {
        fetch(howtoMd).then((response) => response.text()).then((text) => {
            setHowTo(text);
          })
        return;
    }, []);  


    return (
        <Main>
            <SaveDataWrap id="a-buttons" className="buttons">
                <NavLink to="/" className="btn btn-outline">
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    <span>Back</span>
                </NavLink>
            </SaveDataWrap>
            <Help>

                <ReactMarkdown source={howTo} escapeHtml={ false } />
                <iframe src='https://www.youtube.com/embed/OGynTOXjE78'
                    frameBorder='0'
                    width="611"
                    height="422"
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video' />
            </Help>
        </Main>
    )
}

HelpCard.propTypes = {}

export default HelpCard
