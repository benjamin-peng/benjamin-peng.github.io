import styled from "styled-components";
import { Link } from "react-router-dom";

const Navlink = styled(Link)`
   text-decoration: none;
   color: inherit;
   margin: 0 1rem;
   width: 10vw;
   text-align: center;
   font-size: 1.2rem;

   @media only screen and (max-width: 560px) {
        width: 15vw;
        font-size: 1rem;
    }
`;

export default Navlink;