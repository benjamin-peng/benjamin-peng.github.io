import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .row {
        display: flex;
        justify-content: center;
    }
    .capitalized {
        font-size: 1.2em;
    }
    .column {
        width: 30%;
        margin: 0 3em;
    }
    .body-text {
        font-size: 1.2em;
        margin-bottom: 0.8em;
        line-height: 1.4em;
    }
    .contact-info {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(60% + 6em);
        margin: 1em 0 2em 0;
    }
    .img-column {
        height: 48vh;
    }
    .block {
        display: flex;
        align-items: center;
        margin: 0 1em;
    }
    #heading {
        margin-bottom: 1em;
    }
    #portrait {
        width: 100%;
        height: 90%;
        object-fit: cover;
    }
    #caption {
        font-style: oblique;
    }
    #contact-text {
        font-size: 1.1em;
        margin-top: 1em;
        padding-top: 1em;
        width: calc(60% + 6em);
        text-align: center;
        border-top: 1px solid #b8b8b8;
    }
    @media only screen and (max-width: 920px) {
        font-size: 0.8rem;
        .img-column {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 1em;
        }
        #portrait {
            width:50%;
        }
    }
    @media only screen and (max-width: 920px) {
        .row {
            flex-direction: column;
            align-items: center;
        }
        .column {
            width: 80%;
            height: auto;
        }
    }
    @media only screen and (max-width: 628px) {
        .contact-info {
            flex-direction: column;
        }
        #portrait {
            width: 100%;
        }
    }
`;