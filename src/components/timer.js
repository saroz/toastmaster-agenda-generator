import React, { useState } from 'react';
import styled from 'styled-components';
import Timer from 'react-compound-timer';

import { Main, Button } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faUser  } from '@fortawesome/free-regular-svg-icons';

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
    font-size: 1.3rem;
    th {
        text-transform: uppercase;
        font-size: 1.2rem;
        letter-spacing: 2px;
        background-color: #eaf0f9;
        position: sticky;
        top: 3.5rem;
    }
    tr {
        &:nth-child(even) {
            background-color: #f8fbff;
        }
        &.separator {
            > td {
                border-top: 2px solid #ad125b;
            }
        }
    }    
    th,
    td {
        padding: 1.2rem !important;
        border-color: #eaf0f9;
        button {
            margin-left: 2rem;
            margin-right: 0;
        }
        &:first-of-type {
            text-align: center;
            width: 3rem;
        }
    }
    .time-wrap {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        > span {
            display: block;
        }
        
    }
    @media only screen and (max-width: 767px) {
        font-size: 1.5rem;
        th {
            top: -1px;
        }
        button {
            margin-top: 1rem;
        }
        .time-wrap {
            flex-direction: column;
        }
    }
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
    color: #fff;
    font-weight: bold;
    font-size: 0.8rem;
    background-color: #007bff;
    overflow: visible;
`;
const Min = styled.span`
    padding: 1rem;
    border-radius: .25rem;
    background-color: #ecf5ff;
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
                                            <div class="time-wrap">
                                                <p>
                                                    <Min><Timer.Minutes /> m</Min> <span>: <Timer.Seconds /> s</span>
                                                </p>
                                                {currentState === 'INITED' &&
                                                    <Button
                                                        className="btn btn-outline"
                                                        type="button" onClick={start}> 
                                                        <FontAwesomeIcon icon={faPlayCircle} />
                                                        <span>Start</span>
                                                    </Button>
                                                }
                                                {currentState === 'PAUSED' && 
                                                    <Button
                                                        className="btn-save btn-outline"
                                                        type="button" onClick={resume}>
                                                        <FontAwesomeIcon icon={faPlayCircle} />
                                                        <span>Resume</span>
                                                    </Button>
                                                }
                                                {currentState === 'PLAYING' &&
                                                    <Button
                                                        className="btn-warning btn-outline"
                                                        type="button" onClick={pause}>
                                                        <FontAwesomeIcon icon={faPauseCircle} />
                                                        <span>Pause</span>
                                                    </Button>
                                                }
                                            </div>
                                        )}}
                                    </Timer>
                                </td>
                            </tr>))
                    }
                    </tbody>
                </Table>
                <br /><br />
                <MeetingTimerButtons className="btn btn-outline btn-add" type="button" onClick={addSpeaker}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>Add a Speaker</span>
                </MeetingTimerButtons>
            </TimerCardBox>
        </Main>
    )
}

export default TimerCard
