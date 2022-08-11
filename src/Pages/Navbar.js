import NavbarStyled from "../Styles/Navbar.styled";
import Navlink from '../Styles/Navlink.styled';

const Navbar = () => {
    return (
    <NavbarStyled>
        <div className="top">
            <Navlink to='/'>About</Navlink>
            <h1 id="header"><span className="capitalized">B</span>ENJAMIN <span className="capitalized">P</span>ENG</h1>
            <Navlink to='/projects'>Projects</Navlink>
        </div>
        <hr id="border"/>
    </NavbarStyled>
    );
}
 
export default Navbar;