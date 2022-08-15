import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .capitalized {
        font-size: 1.2em;
    }
    .projects-box {
        margin-top: 1em;
        width: 70vw;
        height: auto;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    @media only screen and (max-width: 830px) {
        .projects-box {
            width: 90vw;
        }   
    }
`;