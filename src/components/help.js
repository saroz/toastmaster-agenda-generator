import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import howtoMd from '../howto.md'

import { Help } from './style';

function HelpCard () {

    const [ howTo, setHowTo ] = useState(null);

    useEffect(() => {
        fetch(howtoMd).then((response) => response.text()).then((text) => {
            setHowTo(text);
          })
        return;
    }, []);  


    return (
        <Help>
            <ReactMarkdown source={howTo} escapeHtml={ false } />
            <iframe src='https://www.youtube.com/embed/OGynTOXjE78'
                frameBorder='0'
                width="100%"
                height="422"
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video' />
        </Help>
    )
}

HelpCard.propTypes = {}

export default HelpCard
