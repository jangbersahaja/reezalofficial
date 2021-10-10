import React from "react";
import styled from "styled-components";
import KBBG from "../../img/home/kepalabatas-bg.jpg";

const Container = styled.div`
  height: 60vh;
  background: linear-gradient(rgba(40, 58, 90, 0.9), rgba(40, 58, 90, 0.9)),
    url(${KBBG})  center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 1064px;
  max-width: 100%;
  padding: 30px 0;
`;

const SectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  margin: 50px 0;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>Kepala Batas DiHatiku</SectionTitle>
      </Wrapper>
    </Container>
  );
};

export default Hero;
