import ProjBoxStyled from "../Styles/ProjBox.styled";
import Github from '../Images/github.png';
import Link from '../Images/link.png'
import { useNavigate } from "react-router-dom";

const ProjBox = ({ src, caption, gh, link }) => {

    const navigate = useNavigate();

    const ghClick = () => {
        window.location.href = gh;
    }

    const linkClick = () => {
        window.location.href = link;
    }
    if (caption.indexOf(' ') !== -1) {
        var capOne = caption.substring(0, 1);
        var nextOne = caption.substring(1, caption.indexOf(' '));
        var capTwo = caption.substring(caption.indexOf(' ') + 1, caption.indexOf(' ') + 2);
        var nextTwo = caption.substring(caption.indexOf(' ') + 2);
    } else {
        var capOne = caption.substring(0, 1);
        var nextOne = caption.substring(1);
    }
    

    return (
        <ProjBoxStyled>
            <img className="project-image" src={require(`../Images/${src}.png`)} alt={src} />
            <div className="text-row">
                <p className="project-caption">
                    <span className="capitalized">{capOne}</span>{nextOne}
                </p>
                {capTwo &&
                <p className="project-caption"> &nbsp;
                    <span className="capitalized">{capTwo}</span>{nextTwo}
                </p>
                }
            </div>
            <div className="project-row">
                <img className="img-link" src={Github} alt="github link" onClick={ghClick}
                style={{visibility : gh ? 'visible' : 'hidden'}}/>
                
                <img className="img-link" src={Link} alt="website link" onClick={linkClick}
                style={{visibility : link ? 'visible' : 'hidden'}}/>
            </div>
        </ProjBoxStyled>
    );
}
 
export default ProjBox;