import React, { useState } from 'react';
import styled from 'styled-components';
import Timer from 'react-compound-timer';

import { Main } from './style';
import speakersData from '../data/founders/timecard_20.json';

const TimerCardBox = styled.section`
    padding: 1.5rem;
    background: #fff;
    box-shadow: rgba(0,0,0,.1) 0.4rem 0.7rem 9.3rem 0.3rem;
    box-sizing: border-box;
    max-width:90%;
    margin: 2rem auto 0;

    @media screen and (min-width: 767px) {
        width: 119.0551181102rem;
        margin-top: 5rem;
        padding: 5rem;
    }
`;

const RightTh = styled.th`text-align: right`;

const Table = styled.table`
    th {
        text-transform: uppercase;
        font-size: 120%;
    }

    @media screen and (min-width: 768px) {
        font-size: 1.3rem;
    }

    th,
    td {
        padding: 0.8rem 1rem !important;

        &:first-of-type {
            text-align: center;
        }
    }

    tr.separator {
        > td {
            border-top: 3px solid #003F62 !important;
        }
    }

`;

const TimeButton = styled.button`
    display: inline-block;
    overflow: visible;
    background: #ad125b;
    color: #fff;
    border: 0;
    margin-left: 2rem;
    text-transform: uppercase;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
`;

// const MeetingTimer = styled.section`
//     position: sticky;
//     left: 4rem;
//     right: 4rem;
//     bottom: 0;
//     background: #fff; 
//     box-shadow: rgba(0,0,0,.1) 0.4rem 0.7rem 9.3rem 0.3rem;
//     padding: 2rem;

//     @media screen and (min-width: 768px) {
//         padding: 5rem;
//     }
// `;

const MeetingTimerButtons = styled.button`
    height: 2.5rem;
    color: #fff;
    background-color: #007bff;
    overflow: visible;
    border: 0;
`;

function TimerCard () {
    const [ speakers, updateSpeakers ] = useState(speakersData);

    const changeSpeakerName = speaker => {
        const newSpeakerName = window.prompt('New name for ' + speaker.name);
        if(!newSpeakerName) return;

        const newSpeakersArray = speakers.map(item => {
            if(item.id === speaker.id) {
                item.name = newSpeakerName;
            }

            return item;
        })

        updateSpeakers(newSpeakersArray);
    };

    const addSpeaker = () => {
        const speakerName = window.prompt('New speaker name?');
        const speakerRole = window.prompt('New speaker role?');

        if(!speakerName || !speakerRole) {
            return;
        }

        const newSpeakerObj = {
            id: speakers.length + 1,
            name: speakerName,
            role: speakerRole,
            time: 0
        };

        updateSpeakers([
            ...speakers,
            newSpeakerObj
        ]);
    };

    return (
        <Main>
            <TimerCardBox>
                <h1>Timer Sheet</h1>
                <hr />
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Speaker</th>
                            <RightTh>Time</RightTh>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        speakers && speakers.map(speaker => (<tr key={speaker.id} className={speaker.sep ? 'separator' : 'regular'}>
                                <td>{speaker.id}.</td>
                                <td>
                                    <span onClick={() => changeSpeakerName(speaker)}>
                                        {speaker.name}
                                    </span>
                                    <br /><small>({speaker.role})</small></td>
                                <td>
                                    <Timer initialTime={0} startImmediately={false}>
                                        {({ start, resume, pause, stop, reset, getTimerState }) => {
                                            const currentState = getTimerState();
                                            return (
                                            <React.Fragment>
                                                <Timer.Minutes /> m : <Timer.Seconds /> s
                                                {currentState === 'INITED' && <TimeButton type="button" onClick={start}>Start</TimeButton>}
                                                {currentState === 'PAUSED' &&  <TimeButton type="button" onClick={resume}>Resume</TimeButton>}
                                                {currentState === 'PLAYING' &&  <TimeButton type="button" onClick={pause}>Pause</TimeButton>}
                                            </React.Fragment>
                                        )}}
                                    </Timer>
                                </td>
                            </tr>))
                    }
                    </tbody>
                </Table>
                <br /><br />
                <MeetingTimerButtons type="button" onClick={addSpeaker}>&#65291; ADD A SPEAKER</MeetingTimerButtons>
            </TimerCardBox>
        </Main>
    )
}

export default TimerCard
