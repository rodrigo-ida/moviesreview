import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: auto;
    width: 100vw;
`;

const BackgroundImgContainer = styled.div`
    background-image: url(${(props) => props.img});
    width: 100vw;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1px 0;
    position: relative;
    top: 0px;
`;

const PageFactory = (props) => {
    return (
        <Container>
            <BackgroundImgContainer img={props.img} />
        </Container>
    );
};

export default PageFactory;
