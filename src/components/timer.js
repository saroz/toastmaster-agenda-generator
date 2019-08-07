import React, { useState } from 'react';
import styled from 'styled-components';
import Timer from 'react-compound-timer';

import { Main } from './style';

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

function TimerCard ({ className }) {
    const [ speakers, updateSpeakers ] = useState([
        {
            id: 1,
            name: 'TM Binayak Dahal',
            role: 'SAA',
            sep: false,
            time: 0
        },
        {
            id: 2,
            name: 'TM Punit Jajodia',
            role: 'Presiding Officer',
            sep: false,
            time: 0
        },
        {
            id: 3,
            name: 'TM Alex Wrigley',
            role: 'TMoE',
            sep: false,
            time: 0
        },
        {
            id: 4,
            name: 'TM Manesh Timsina',
            role: 'Grammarian',
            sep: false,
            time: 0
        },
        {
            id: 5,
            name: 'TM Sirapa Manandhar',
            role: 'Ah Counter',
            sep: false,
            time: 0
        },
        {
            id: 6,
            name: 'TM Shekhar Sharma',
            role: 'Timer',
            sep: false,
            time: 0
        },
        {
            id: 7,
            name: 'TM Sanchita Tiwari',
            role: 'Ballot Counter',
            sep: false,
            time: 0
        },
        {
            id: 8,
            name: 'TM Nabin Jaiswa',
            role: 'Listener',
            sep: false,
            time: 0
        },
        {
            id: 9,
            name: 'TM Chandrayan Shrestha (SR3)',
            role: 'General Evaluator',
            sep: false,
            time: 0
        },
        {
            id: 10,
            name: 'TM Dipesh Khanal',
            role: 'TTM',
            sep: false,
            time: 0
        },
        {
            id: 11,
            name: 'TM Table Topic Speaker 1',
            role: 'Table Topic Speaker',
            sep: true,
            time: 0
        },
        {
            id: 12,
            name: 'TM Table Topic Speaker 2',
            role: 'Table Topic Speaker',
            sep: false,
            time: 0
        },
        {
            id: 13,
            name: 'TM Table Topic Speaker 3',
            role: 'Table Topic Speaker',
            sep: false,
            time: 0
        },
        {
            id: 14,
            name: 'TM Amit Bajracharya',
            role: 'Feautured Speaker',
            sep: true,
            time: 0
        },
        {
            id: 15,
            name: 'TM Brijen Joshi (CC, CL)',
            role: 'Feautured Speaker',
            sep: false,
            time: 0
        },
        {
            id: 16,
            name: 'TM Diwan Adhikari',
            role: 'Feautured Speaker',
            sep: false,
            time: 0
        },
        {
            id: 17,
            name: 'TM Samjahana Rai (IP2,CC,CL)',
            role: 'Evaluator for Amit',
            sep: true,
            time: 0
        },
        {
            id: 18,
            name: 'TM Raushan Jaiswal (CC)',
            role: 'Evaluator for Brijen',
            sep: false,
            time: 0
        },
        {
            id: 19,
            name: 'TM Shaurab Lohanil (ACB, ALB)',
            role: 'Evaluator for Diwan',
            sep: false,
            time: 0
        }
    ])
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
                                <td>{speaker.name} <br /><small>({speaker.role})</small></td>
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
            </TimerCardBox>
        </Main>
    )
}

export default TimerCard
