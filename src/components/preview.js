import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import styled from 'styled-components';
import logo from '../toastmasters-logo.png';
const Main = styled.main``;
const AgendaActionButtons = styled.div.attrs({ className: 'agenda-actionButtons' })``;
const Button = styled.button.attrs({ className: 'btn' })``;

const Field = styled.input.attrs({ className: 'form-item' })``;
const Textarea = styled.textarea.attrs({ className: 'form-item' })``;

const AgendaLivePreview = styled.section`
    background: #fff;
    font-size: 0;
    margin: 0 auto;
    min-height: 168.3779527559rem;
    width: 119.0551181102rem;
    box-shadow: rgba(0,0,0,.3) 0.4rem 0.7rem 9.3rem 0.3rem;
    margin-top: 10rem;
`;

const PreviewIn = styled.div`
    padding: 5rem;
    min-height: 168.3779527559rem;
    display: grid;
    align-items: start;
    grid-template-rows: 15rem 1fr;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-areas:
    "header header header header"
    "sidebar main main main"
    " . footer footer footer";
`;

const AgendaHeader = styled.header`
    grid-area: header;
    display: block;
    position: relative;
    .border {
        &-header {
            border-bottom: 15rem solid #003F62;
            &-thin {
                border-bottom: .4rem solid #A3B6B8;
            }
        }
        &-white {
            border-bottom: 0.2rem solid #fff;
        }
        &-light {
            border-bottom: 0.2rem solid #A3B6B8;
        }
    }
`;

const TMILogo = styled.div`
    width: 18rem;
    position: absolute;
    left: 12rem;
    top: 50.5%;
`;

const AgendaSideBar = styled.aside `
    grid-area: sidebar;
    border-right: 0.2rem solid #004165;
    margin-top: 12rem;
    padding-right: 4rem;
    grid-auto-rows: 1fr;
    height: 100%;
`;

const AgendaList = styled.div`
    grid-area: main;
    padding-left: 3rem;
`;

const Ballots = styled.div`;
    grid-area: footer;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 9rem;
    grid-gap: 3rem;
    padding-left: 5rem;
    span {
        font-size: 1rem;
        padding: 1.5rem;
        border: 1px dotted #004165;
    }
`;

const ClubName = styled.div`
    text-align: center;
    margin: 1.5rem 0 1rem;
    line-height: 1.2;
    small {
        font-size: 1.5rem;
        color: red;
    }
`;
const AgendaItem = styled.article`
    font-size: 1.5rem;
`;

const AgendaItemTitle = styled.header`
    display: flex;
    margin-bottom: 0;
`;

const DFlex = styled.div`
    display: flex;
    justify-content: center;
`;
const ClubTitle = styled.h2`
    font-size: 2.5rem;
    color: #003F62;
    margin: 0;
    display: inline-block;
    input {
        font-weight: 700;
        &::placeholder {
            color: #003F62;
        }
    }
`;
const ClubNumber = styled.span`
    font-size: 2.5rem;
    color: #003F62;
    input {
        &::placeholder {
            color: #003F62;
        }
    }
`;

const ClubMeetingDate = styled.time`
    font-size: 1.5rem;
    display: block;
    input {
        margin: 0 auto;
        text-align: center;
        max-width: 20rem;
    }
`;

const ClubMeetingTheme = styled.p`
    font-size: 1.5rem;
    display: block;
    color: #003F62;
    input {
        margin: 0 auto;
        text-align: center;
        max-width: 50rem;
        &::placeholder {
            color: #003F62;
        }
    }
`;

const SaveDataWrap = styled.div`
  position: fixed;
  top: 10rem;
  @media print {
    display: none;
  }

`;

const AgendaTitle = styled.h4``;
const AgendaTM = styled.span``;
const AgendaContent = styled.div``;

function MeetingAgendaPreview ({ className }) {

    const [ loading, setLoading ] = useState(false);
    // Executive Team
    const [ meetingBasic, setmeetingBasic ] = useState({
        clubName: '',
        clubNumber: '',
        clubMission: '',
        meetingDate: '',
        meetingDetail: '',
        meetingTheme: '',

        president: '',
        vPEducation: '',
        vPMembership: '',
        vPRelation: '',
        secretary: '',
        treasurer: '',
        sergeant: '',
        pastPresident: '',
        

    });
    // Agenda Object
    const [ meetingAgenda, setMeetingAgenda ] = useState([
        {
            id: 1,
            title: '',
            toastmaster: '',
            startAt: '',
            details: []
        }
    ]);

    // Update MeetingBasicInfo data on Change
    const updateMeetingBasicInfo = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setmeetingBasic({ ...meetingBasic, [name] : value });
    }

    // Update MeetingAgenda data on Change
    const updateMeetingAgenda = (e, id) => {
        let newMeetingAgenda = [];
        // if( typeof e === 'string') {
        if( e.target.getAttribute('id') === 'details') {
            newMeetingAgenda = meetingAgenda.map(agenda => {
                if (parseInt(agenda.id, 10) !== id) return agenda;
                return { ...agenda, 'details': e.target.innerHTML };
            });
        } else {
            newMeetingAgenda = meetingAgenda.map(agenda => {
            if (parseInt(agenda.id, 10) !== id) return agenda;
            return { ...agenda, [ e.target.name ]: e.target.value };
          });
        }
        setMeetingAgenda(newMeetingAgenda);
    }

    // Add New MeetingAgenda Item
    const addNewAgenda = () => {
        setMeetingAgenda([
            ...meetingAgenda, {
            id: meetingAgenda.length + 1,
            title: '',
            toastmaster: '',
            startAt: '',
            details: []}
        ]);
        console.log(meetingAgenda);
    };

    // Remove Current MeetingAgenda Item
    const removeAgenda = (e, id) => {
        const newMeetingAgenda = meetingAgenda.filter((agenda) => agenda.id !== id);
        const message = window.confirm(`Do you want to delete Agenda agenda #${ id } ?`);
        if (message === true) {
            setMeetingAgenda(newMeetingAgenda);
        }
        return false;
    }

    const addContentType = (e, id) => {
        console.log('PT');
    }
    const addParagraph = (e, id) => {
        console.log('P added');
    }
    const addWOD = (e, id) => {
        console.log('WOD added');
    }
    const addTable = (e, id) => {
        console.log('Table added');
    }
    


    
    // Save MeetingBasicInfo data on LocalStorage
    const saveData = (e) => {
        setLoading(true);
        localforage.setItem('meeting', meetingBasic).then((value) => {
            console.log('success');
        }).catch(function(err) { console.log(err) });
        localforage.setItem('agenda', meetingAgenda).then((value) => {
            console.log('success');
        }).catch(function(err) { console.log(err) });

        // Hide Loader
        setTimeout(() => {
            setLoading(false)
        }, 1500)
        e.preventDefault();
    }

    // Fetch MeetingBasicInfo data
    useEffect(() => {
        localforage.config({
            name: 'toastmaste_saroz-offline'
        });
        // Meeting Basic Information
        localforage.getItem('meeting', function(err, value) {
          if (value !== null ) setmeetingBasic(value)
        });
        localforage.getItem('agenda', function(err, value) {
          if (value !== null ) setMeetingAgenda(value)
        });
        return;
      }, []);  

      const printMyAgenda = () => {
        window.print();
      }

    return (
        <Main>
            <SaveDataWrap>
                <Button className="bg-primary btn-print" onClick={printMyAgenda}>
                    <i className="fa fa-print"></i>
                    <span>Print</span>
                </Button>
                <Button onClick={saveData} type="button">Save my meeting agenda</Button>
                {loading && <i className="fa fa-spinner fa-spin" />}
            </SaveDataWrap>
            <AgendaLivePreview className={ `${ className } print-preview` }>
                <PreviewIn>
                    <AgendaHeader>
                        <hr className="border-header"></hr>
                        <hr className="border-header-thin"></hr>
                        <hr className="border-white"></hr>
                        <hr className="border-light"></hr>

                        <TMILogo>
                            <img src={ logo } className="App-logo" alt="logo" />
                        </TMILogo>
                    </AgendaHeader>
                    <AgendaSideBar>
                        <dl>
                            <dt>President</dt>
                            <dd>
                                <Field
                                type="text"
                                autoComplete="off"
                                name="president"
                                onChange={updateMeetingBasicInfo}
                                value={meetingBasic.president}
                                placeholder="Club president name"/>
                            </dd>

                            <dt>VP Education</dt>
                            <dd>
                                <Field
                                type="text"
                                autoComplete="off"
                                name="vPEducation"
                                onChange={updateMeetingBasicInfo}
                                value={meetingBasic.vPEducation}
                                placeholder="Club VP Education name" />
                            </dd>
                            <dt>VP Membership</dt>
                            <dd>
                                <Field
                                type="text"
                                autoComplete="off"
                                name="vPMembership"
                                onChange={updateMeetingBasicInfo}
                                value={meetingBasic.vPMembership}
                                placeholder="Club VP Membership name" />
                            </dd>
                            
                            <dt>VP Public Relations</dt>
                            <dd>
                                <Field
                                type="text"
                                autoComplete="off"
                                name="vPRelation"
                                onChange={updateMeetingBasicInfo}
                                value={meetingBasic.vPRelation}
                                placeholder="Club VP Public Relations name" />
                            </dd>

                            <dt>Secretary</dt>
                            <dd>
                                <Field
                                type="text"
                                autoComplete="off"
                                name="secretary"
                                onChange={updateMeetingBasicInfo}
                                value={meetingBasic.secretary}
                                placeholder="Club Secretary name" />
                            </dd>

                            <dt>Treasurer</dt>
                            <dd>
                                <Field
                                type="text"
                                autoComplete="off"
                                name="treasurer"
                                onChange={updateMeetingBasicInfo}
                                value={meetingBasic.treasurer}
                                placeholder="Club Treasurer name" />
                            </dd>

                            <dt>Sergeant-At-Arms</dt>
                            <dd>
                                <Field
                                type="text"
                                autoComplete="off"
                                name="sergeant"
                                onChange={updateMeetingBasicInfo}
                                value={meetingBasic.sergeant}
                                placeholder="Club Sergeant-At-Arms name" />
                            </dd>
                            <dt>Past President</dt>
                            <dd>
                                <Field
                                type="text"
                                autoComplete="off"
                                name="pastPresident"
                                onChange={updateMeetingBasicInfo}
                                value={meetingBasic.pastpresident}
                                placeholder="Past President" />
                            </dd>
                        </dl>
                        <p className="lead d-block">
                            <Textarea
                            name="meetingDetail"
                            value={meetingBasic.meetingDetail}
                            onChange={updateMeetingBasicInfo}
                            placeholder="We meet every Wednesday from 6:00pm to 7:00pm at XYZ Restaurant, Kathmandu, Nepal."
                            required />
                        </p>
                        <p className="lead">
                            <span className="d-block title-bold">Club Mission</span>
                            <Textarea
                            className="large"
                            name="clubMission"
                            value={meetingBasic.clubMission}
                            onChange={updateMeetingBasicInfo}
                            placeholder="We provide a supportive and positive learning experience in which members are empowered to develop communication and leadership skills, resulting in greater self-confidence and personal growth."
                            required />
                        </p>
                    </AgendaSideBar> 
                    <AgendaList>
                        <ClubName>
                            <DFlex>
                                <ClubTitle>
                                    <Field type="text" autoComplete="off" name="clubName" onChange={updateMeetingBasicInfo} value={meetingBasic.clubName} placeholder="Club Name" />
                                </ClubTitle>
                                <ClubNumber>
                                    <Field type="text" autoComplete="off" name="clubNumber" onChange={updateMeetingBasicInfo} value={meetingBasic.clubNumber} placeholder="Club Number" />
                                </ClubNumber>
                            </DFlex>
                            <ClubMeetingDate>
                            <Field
                                type="text"
                                autoComplete="off"
                                name="meetingDate"
                                onChange={updateMeetingBasicInfo}
                                value={meetingBasic.meetingDate}
                                placeholder="Meeting date" />
                            </ClubMeetingDate>
                            <ClubMeetingTheme>
                                <Field
                                type="text"
                                autoComplete="off"
                                name="meetingTheme"
                                onChange={updateMeetingBasicInfo}
                                value={meetingBasic.meetingTheme}
                                placeholder="Meeting theme" />
                            </ClubMeetingTheme>
                        </ClubName>
                        <div className="agendas-wrap">
                            { meetingAgenda.map(agenda => 
                                <AgendaItem className="agenda" key={ agenda.id }>
                                    <AgendaActionButtons>
                                        { agenda.id !== 1 && (
                                            <>
                                                <span className="action action-reorder">&nbsp;</span>
                                                <span onClick={ (e) => removeAgenda(e, agenda.id) } className="action action-remove">&nbsp;</span>
                                            </>
                                        )}
                                        <span onClick={addNewAgenda} className="action action-add">&nbsp;</span>
                                    </AgendaActionButtons>

                                    <AgendaItemTitle>
                                        <time className="agenda-time">
                                            <Field type="text" name="startAt" autoComplete="off" onChange={(e) => updateMeetingAgenda(e, agenda.id)} placeholder="6:00" value={agenda.startAt} />
                                        </time>
                                        <AgendaTitle className="agenda-title">
                                            <Field type="text" name="title" autoComplete="off" onChange={(e) => updateMeetingAgenda(e, agenda.id)} placeholder="SAA Calls Meeting to Order" value={agenda.title} />
                                        </AgendaTitle>
                                        <AgendaTM className="agenda-TM">
                                            <Field type="text" name="toastmaster" autoComplete="off" onChange={(e) => updateMeetingAgenda(e, agenda.id)} placeholder="Toastmaster name" value={agenda.toastmaster} />
                                        </AgendaTM>
                                    </AgendaItemTitle>
                                    <AgendaContent className="agenda-content">
                                        <div className="mark-down">
                                            <span className="d-block">Add agend detail </span>
                                            <span onClick={addContentType} data-type="pt" className="action">P / T</span>
                                            <span onClick={addParagraph} className="action">P</span>
                                            <span onClick={addWOD} className="action">WOD</span>
                                            <span onClick={addTable} className="action">Table</span>
                                        </div>
                                    </AgendaContent>
                                </AgendaItem>
                            )}
                        </div>
                    </AgendaList>
                    <Ballots>
                        <span>Better Table Topics Speaker</span>
                        <span>Better Featured Speaker</span>
                        <span>Better Evaluator</span>
                    </Ballots>
                </PreviewIn>
            </AgendaLivePreview>
        </Main>
    )
}

MeetingAgendaPreview.propTypes = {
  className: PropTypes.string,
  club: PropTypes.object,
  excom: PropTypes.object,
  meeting: PropTypes.object,
  agendas: PropTypes.array,
}

export default MeetingAgendaPreview
