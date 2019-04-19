import styled from 'styled-components';

const LG = '1200px'
const XXS = '480px'

export const Main = styled.main``;
export const AgendaActionButtons = styled.div.attrs({ className: 'agenda-actionButtons' })``;
export const Button = styled.button.attrs({ className: 'btn' })``;

export const Field = styled.input.attrs({ className: 'form-item' })``;
export const Textarea = styled.textarea.attrs({ className: 'form-item' })``;

export const AgendaTitle = styled.h4`
    font-weight: bold;
    margin: 0;
    font-size: 1.4rem;
    max-width: calc(100% - 26rem);
    flex: 0 0 calc(100% - 26rem);
`;
export const AgendaDesc = styled.p`
    max-width: calc(100% - 26rem);
    flex: 0 0 calc(100% - 26rem);
    &.full {
        max-width: 100%;
        flex: 0 0 100%;
    }
`;

export const AgendaTM = styled.span`
    margin-left: auto;
    font-size: 1.4rem;
    max-width: 20rem;
    flex: 0 0 20rem;

    input {
        text-align: right;
    }
`;

export const AgendaContent = styled.div`
    margin-left: 6rem;
    * {
        font-size: 1.4rem;
    }
    @media screen {
        margin-left: 6.6rem;
    }
`;

export const SaveDataWrap = styled.div`
    position: relative;
`;

export const AgendaLivePreview = styled.section`
    background: #fff;
    font-size: 0;
    margin: 0 auto;
    min-height: 168rem;
    width: 119.0551181102rem;
    box-shadow: rgba(0,0,0,.1) 0.4rem 0.7rem 9.3rem 0.3rem;
    @media only screen and (max-width: ${LG}) {
        max-width: 100%;
    }
`;

export const PreviewIn = styled.div`

    display: grid;
    align-items: start;
    grid-template-rows: 15rem 1fr 9rem;
    grid-template-columns: 25% 75%;
    grid-template-areas:
        "header header"
        "sidebar main"
        " . footer";
    min-height: 168rem;
    box-sizing: border-box;
    padding: 5rem;
    @media only screen and (min-width: ${LG}) {
        max-width: 100%;
    }  
    @media only screen and (max-width: ${XXS}) {
        padding: 5rem 2rem;
    }  
    @media print {
        max-width: 100%;
    }
`;

export const AgendaHeader = styled.header`
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

export const TMILogo = styled.div`
    width: 18rem;
    position: absolute;
    left: 12rem;
    top: 50.5%;
`;

export const AgendaSideBar = styled.aside `
    grid-area: sidebar;
    padding-top: 12rem;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    .inWrap {
        height: 100%;
        border-right: 0.2rem solid #004165;
        padding-right: 4rem;
    }
`;

export const AgendaList = styled.div`
    grid-area: main;
    padding-left: 3rem;
    height: 100%;
`;

export const Ballots = styled.div`;
    grid-area: footer;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 9rem;
    grid-gap: 3rem;
    padding-left: 5rem;
    span {
        display: block;
        font-size: 1rem;
        padding: 1.5rem;
        border: 1px dotted #004165;
        box-sizing: border-box;
    }
`;

export const ClubName = styled.div`
    text-align: center;
    margin: 3rem 0 1rem;
    line-height: 1.2;
    small {
        font-size: 1.5rem;
        color: red;
    }
`;
export const AgendaItem = styled.article`
    font-size: 1.5rem;
`;

export const AgendaItemTitle = styled.header`
    display: flex;
    margin-bottom: 0;
`;

export const DFlex = styled.div`
    display: flex;
    justify-content: center;
`;
export const ClubTitle = styled.h2`
    font-size: 2.5rem;
    color: #003F62;
    margin: 0;
    position: relative;
    display: inline-block;
    line-height: 1.2;
    span {
        opacity: 0;
        display: block;
        padding: 0.2rem 0.6rem;
        height: 100%;
        z-index: -1;
        position: relative;
    }
    input {
        position: absolute;
        line-height: 1;
        z-index: 9;
        top: 0;
        width: 100%;
        font-weight: 700;
        &::placeholder {
            color: #003F62;
        }
    }
`;
export const ClubNumber = styled.p`
    position: relative;
    line-height: 1.2;
    span {
        opacity: 0;
        display: block;
        padding: 0.2rem 0.6rem;
        height: 100%;
        z-index: -1;
        position: relative;
    }
    font-size: 2.5rem;
    color: #003F62;
    input {
        z-index: 9;
        line-height: 1;
        position: absolute;
        top: 0;
        width: 100%;
        &::placeholder {
            color: #003F62;
        }
    }
`;

export const ClubMeetingDate = styled.time`
    font-size: 1.2rem;
    display: block;
    input {
        margin: 0 auto;
        text-align: center;
        max-width: 30rem;
    }
`;

export const ClubMeetingTheme = styled.p`
    font-size: 1.5rem;
    display: block;
    color: #003F62;
    line-height: 1.4;
    input {
        line-height: 1.4;
        margin: 0 auto;
        text-align: center;
        max-width: 60rem;
        &::placeholder {
            color: #003F62;
        }
    }
`;
export const LoaderIndicator = styled.i`
    position: absolute;
    left: 102%;
    top: 2rem;
    color: #007bff;
    font-size: 2rem !important;
`;

export const TMInternational = styled.p`
    padding: 0.2rem 0.6rem;
    margin-bottom: 3rem;
    @media print {
        padding: 0;
    }
`;
export const Blockquote = styled.blockquote`
    margin: .125rem 0;
    border: 1px solid #000;
    padding: .875rem;
    margin-bottom: .625rem;
    line-height: 1.8;
    p {
        display: flex;
        flex-direction: row;
        span {
            white-space: nowrap;
            padding-right: 0.5rem;
        }
    }
`;
export const Help = styled.div`
    position: fixed;
    right: 4rem;
    top: 4rem;
    a {
        text-align: center;
        font-weight: bold;
        border: 1px solid;
        padding: 0.5rem 0.8rem;
        background-color: #fff;
        border-radius: 0.2rem;
        text-decoration: none;
    }
`;
