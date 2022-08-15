import ProjectsStyled from "../Styles/Projects.styled";
import ProjBox from "../Components/ProjBox";

const Projects = () => {
    return (
        <ProjectsStyled>
            <h2 id="heading"><span className="capitalized">P</span>ERSONAL <span className="capitalized">P</span>ROJECTS</h2>
            <div className="projects-box">
                <ProjBox src={'hangman'} caption={'HANGMAN'} gh={'https://github.com/benjamin-peng/hangman'} link={'https://benjamin-peng.github.io/hangman/'}></ProjBox>
                <ProjBox src={'macronizer'} caption={'MACRONIZER'} gh={'https://github.com/benjamin-peng/macronizer'} link={'https://benjamin-peng.github.io/macronizer/'}></ProjBox>
                <ProjBox src={'5-3-1'} caption={'PROGRAM GENERATOR'} gh={'https://github.com/benjamin-peng/5-3-1-program-generator'} link={'https://benjamin-peng.github.io/5-3-1-program-generator/'}></ProjBox>
                <ProjBox src={'calculator'} caption={'CALCULATOR'} gh={'https://github.com/benjamin-peng/basic-calculator'} link={'https://benjamin-peng.github.io/basic-calculator/'}></ProjBox>
                <ProjBox src={'CPU'} caption={'LOGISIM CPU'} ></ProjBox>
            </div>
        </ProjectsStyled>
    );
}
 
export default Projects;