import {
    StyledMovieCardContainer,
    CardTextContainer,
    CardText,
    Title,
    Subtitle,
    ArrowContainer,
} from "./S.movieCard";


const StyledMovieCard = (props) => {

    const clickHandler = () => props.setcardClicked(props.movieCardIndex)

    return (
        <StyledMovieCardContainer
            img={props.img}
            onClick={clickHandler}
        >
            <CardTextContainer>
                <CardText>
                    <Title>{props.title}</Title>
                    <Subtitle>{props.subtitle}</Subtitle>
                </CardText>
                <ArrowContainer>
                    <i className="fas fa-long-arrow-alt-right"></i>
                </ArrowContainer>
            </CardTextContainer>
        </StyledMovieCardContainer>
    );
};

export default StyledMovieCard;
