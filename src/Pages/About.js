import AboutStyled from "../Styles/About.styled";
import { Link } from "react-router-dom";
import Portrait from '../Images/IMG_2744.jpg'

const About = () => {
    return (
    <AboutStyled>
        <div className="row">
            <div className="column">
                <h2 id="heading"><span className="capitalized">W</span>ELCOME.</h2>
                <p className="body-text">I'm currently a Duke student pursuing
                a bachelor's degree in computer science with the hope of becoming
                a full-stack engineer. I do my best to keep up-to-date with the
                evolving standards of web development and am committed to the
                philosophy of life-long learning.
                </p>
                <p className="body-text">Aside from computer science, I'm
                also studying Ancient Greek and Latin and considering a dual 
                major in classical languages. In my free time, I like to play
                guitar, powerlift, and read novels.
                </p>
                <p className="body-text">Click <Link to='/projects'>here</Link> to view my
                personal projects.</p>
            </div>
            <div className="column img-column">
                <img src={Portrait} id="portrait" alt="A picture of me" />
                <p id="caption">Pictured above: me &#40;on top&#41;</p>
            </div>
        </div>
        <h3 id="contact-text"><span className="capitalized">C</span>ONTACT <span className="capitalized">M</span>E</h3>
        <div className="contact-info">
            <div className="block">
                <h3><span className="capitalized">P</span>HONE:&nbsp;</h3>
                <p>&#40;858&#41; 538-3895</p>
            </div>
            <div className="block">
                <h3><span className="capitalized">E</span>MAIL:&nbsp;</h3>
                <p>benjamin.m.peng@gmail.com</p>
            </div>
        </div>
        
       
    </AboutStyled>
    );
}
 
export default About;