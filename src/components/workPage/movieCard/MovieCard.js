import React, { useState } from "react";
import {
    StyledMovieCardContainer,
    CardTextContainer,
    CardText,
    Title,
    Subtitle,
    ArrowContainer,
} from "./S.movieCard";

const StyledMovieCard = (props) => {
    const [clicked, setclicked] = useState(false);

    const clickHandler = () => {
        setclicked((prevState) => !prevState);
        props.setshowHeader(false);
    };

    return (
        <StyledMovieCardContainer
            img={props.img}
            onClick={clickHandler}
            clicked={clicked}
        >
            {clicked ? (
                ""
            ) : (
                <CardTextContainer>
                    <CardText>
                        <Title>{props.title}</Title>
                        <Subtitle>{props.subtitle}</Subtitle>
                    </CardText>
                    <ArrowContainer>
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </ArrowContainer>
                </CardTextContainer>
            )}
            {props.children}
        </StyledMovieCardContainer>
    );
};

export default StyledMovieCard;
