import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    .top {
        height: 8vh;
        width: 60vw;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding-top: 2.5rem;
        align-items: baseline;
    }
    .capitalized {
        font-size: 1.2em;
    }
    #header {
        font-size: 2.5rem;
    }
    #border {
        width: 70vw;
        border: 0.5px solid black;
    }
    @media only screen and (max-width: 883px) {
        .top {
            width: 100vw;
        }
        
    }
    @media only screen and (max-width: 830px) {
        #border {
            width: 90vw;
        }
        
    }
    @media only screen and (max-width: 560px) {
        #header {
            font-size: 2rem;
        }
    }
    @media only screen and (max-width: 499px) {
        #header {
            font-size: 1.5rem;
        }
    }
    @media only screen and (max-width: 400px) {
        #header {
            font-size: 1rem;
        }
    }
`;