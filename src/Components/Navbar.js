import NavbarStyled from "../Styles/Navbar.styled";
import Navlink from '../Styles/Navlink.styled';
import Highlight from "./Highlight";

const Navbar = () => {
    return (
    <NavbarStyled>
        <div className="top">
            <Highlight>
                <Navlink to='/'>About</Navlink>
            </Highlight>
            <h1 id="header"><span className="capitalized">B</span>ENJAMIN <span className="capitalized">P</span>ENG</h1>
            <Highlight>
                <Navlink to='/projects'>Projects</Navlink>
            </Highlight>
        </div>
        <hr id="border"/>
    </NavbarStyled>
    );
}
 
export default Navbar;