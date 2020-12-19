import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import {  motion } from "framer-motion";




const Container = styled.div`
  height: auto;
  width: 100vw;
  position: relative;
  z-index: 5555;
  background-color: black;
`;

const BackgroundImgFullScreen = keyframes`

0%{ height: 200px}

100%{ height: 100vh}

`;

const BackgroundImgContainer = styled.div`
  background-image: url(${(props) => props.img});
  width: 100vw;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 1px 0;
  /* position: relative;
  top: 0px; */

  animation: ${BackgroundImgFullScreen} 1s 50ms forwards;
`;

const btnAnimation = keyframes`
0%{ left: -2380px}
90%{left: 0px}
100%{left: -15px;}
`;

const VideoBtn = styled.button`
  height: 55px;
  width: 242px;
  background-color: white;
  color: gray;
  font-size: 18px;
  position: absolute;
  z-index: 1;
  top: 50vh;
  left: -2500px;
  border: none;
  padding-left: 20px;
  padding: 10px 0 10px 20px;
  animation: ${btnAnimation} 0.4s .5s ease-out forwards;
`;

const arrowStyle = {
  color: "gold",
  paddingLeft: "20px",
  fontSize: "25px",
};

const TitleContainer = styled.div`
  background-color: lightgrey;
  height: 18vh;
  width: 100vw;
  padding: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BrandParagraph = styled.p`
  border-bottom: 1px solid;
  width: 30vw;
  font-size: 14px;
  color: darkslategrey;
  text-align: center;
  padding-bottom: 10px;
`;

const TitleParagraph = styled.p`
  font-size: 18px;
  color: goldenrod;
  letter-spacing: 4px;
  font-weight: 600;
  padding-top: 14px;
`;

const SubTitleParagraph = styled.p`
  font-size: 16px;
  color: darkslategrey;
  padding: 2px;
`;

const DescriptionContainer = styled.div`
  padding: 20px;
  line-height: 30px;
  text-align: justify;
  background-color: white;
`;

const AllMoviesImgContainer = styled.div`
  background-color: black;
  background-image: url(${(props) => props.AllMovies});
  width: 100vw;
  height: 208px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LastDiv = styled.div`
  background-color: #747171;
  height: 20vh;
  width: 100vw;
  padding: 20px;
`;

const LastDivParagraph = styled.p`
  color: darkgray;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 20px;
`;

const PageFactory = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });


  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={props.pageVariants}
      transition={props.pageTransition}
    >
    <Container>
      <BackgroundImgContainer img={props.img} />
      <VideoBtn>
        ASSISTA O VIDEO
        <i style={arrowStyle} className="fas fa-long-arrow-alt-right"></i>
      </VideoBtn>
      <TitleContainer>
        <BrandParagraph>AVATARLABS</BrandParagraph>
        <TitleParagraph>{props.title}</TitleParagraph>
        <SubTitleParagraph>{props.subtitle}</SubTitleParagraph>
      </TitleContainer>
      <DescriptionContainer>{props.description}</DescriptionContainer>
      <AllMoviesImgContainer AllMovies={props.AllMovies} />
      <LastDiv>
        <LastDivParagraph>{props.lastParagraph}</LastDivParagraph>
      </LastDiv>
    </Container>
  </motion.div>
  );
};

export default PageFactory;
