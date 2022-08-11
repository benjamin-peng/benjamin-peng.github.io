import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import styled from 'styled-components';

const Highlight = ({ children }) => {

    const HighlightStyle = styled.div`
        
    `;

    const [hover, setHover] = useState(false);

    const styles = useSpring({
        from: {
            color: hover ? 'black' : 'grey'
        },
        to: {
            color: hover ? 'grey' : 'black'
        }, 
        config: {
            friction: 20,
            tension: 300
        }

    });

    const enter = () => {
        setHover(true);
    };

    const leave = () => {
        setHover(false);
    };

    return (<HighlightStyle as={animated.div} style={styles} onMouseEnter={enter} onMouseLeave={leave}>
        {children}
    </HighlightStyle>);
}
 
export default Highlight;