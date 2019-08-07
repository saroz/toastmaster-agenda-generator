import React, { useEffect, useState } from 'react';
import localforage from 'localforage';
import styled from 'styled-components';

import { Main } from './style';

const TimerCardBox = styled.section`
    padding: 1.5rem;
    background: #fff;
    box-shadow: rgba(0,0,0,.1) 0.4rem 0.7rem 9.3rem 0.3rem;
    box-sizing: border-box;

    @media screen and (min-width: 767px) {
        width: 119.0551181102rem;
        margin: 5rem auto 0;
        padding: 5rem;
    }
`;

const RightTh = styled.th`text-align: right`;

const RightTd = styled.td`
    text-align: right;

    @media screen and (min-width: 768px) {
        width: 12rem;
    }
`;

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
            time: 0
        },
        {
            id: 2,
            name: 'TM Punit Jajodia',
            role: 'Presiding Officer',
            time: 0
        },
        {
            id: 3,
            name: 'TM Alex Wrigley',
            role: 'TMoE',
            time: 0
        },
        {
            id: 4,
            name: 'TM Manesh Timsina',
            role: 'Grammarian',
            time: 0
        },
        {
            id: 4,
            name: 'TM Sirapa Manandhar',
            role: 'Ah Counter',
            time: 0
        },
        {
            id: 5,
            name: 'TM Shekhar Sharma',
            role: 'Timer',
            time: 0
        },
        {
            id: 6,
            name: 'TM Sanchita Tiwari',
            role: 'Ballot Counter',
            time: 0
        },
        {
            id: 7,
            name: 'TM Nabin Jaiswa',
            role: 'Listener',
            time: 0
        },
        {
            id: 8,
            name: 'TM Chandrayan Shrestha (SR3)',
            role: 'General Evaluator',
            time: 0
        },
        {
            id: 9,
            name: 'TM Dipesh Khanal',
            role: 'TTM',
            time: 0
        }
    ])
    useEffect(() => {
        localforage.config({
            name: 'toastmaste_saroz-offline'
        });

        localforage.getItem('agenda', function(err, storedAgenda) {
            if (storedAgenda === null ) return;
            console.log(storedAgenda);
            // const [speakers, addSpeakers] = useState(storedAgenda);
        });

      });
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
                        speakers && speakers.map(speaker => <tr>
                            <td>{speaker.id}</td>
                            <td>{speaker.name} <br /><small>({speaker.role})</small></td>
                            <td>
                                <span>{speaker.time}</span>
                                <TimeButton type="button">Start</TimeButton>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </Table>
            </TimerCardBox>
        </Main>
    )
}

export default TimerCard
