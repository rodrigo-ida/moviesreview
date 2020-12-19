import {
    StyledMovieCardContainer,
    CardTextContainer,
    CardText,
    Title,
    Subtitle,
    ArrowContainer,
} from "./S.movieCard";

import React, {useState} from 'react'


const StyledMovieCard = (props) => {

    const [isHover, setIsHover] = useState(false)



    const clickHandler = () => props.setcardClicked(props.movieCardIndex)

    return (
        <StyledMovieCardContainer
            img={props.img}
            onClick={clickHandler}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <CardTextContainer isHover={isHover}>
                <CardText isHover={isHover}>
                    <Title>{props.title}</Title>
                    <Subtitle>{props.subtitle}</Subtitle>
                </CardText>
                <ArrowContainer isHover={isHover}>
                    <i className="fas fa-long-arrow-alt-right"></i>
                </ArrowContainer>
            </CardTextContainer>
        </StyledMovieCardContainer>
    );
};

export default StyledMovieCard;
