import styled from "styled-components";

export default styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 30%;
    min-width: 12em;
    min-height: 12em;
    height: 20vw;
    margin: 0 0 1.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .project-image {
        height: 60%;
        object-fit: cover;
    }
    .project-caption {
        font-size: 16px;
    }
    .project-row {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    .img-link {
        object-fit: cover;
        width: 20px;
    }
    .img-link:hover {
        cursor: pointer;
    }
    .capitalized {
        font-size: 1.2em;
    }
    .text-row {
        display: flex;
    }
`;