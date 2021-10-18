import React from "react";
import styled from "styled-components";
import KPILiveable from "./KPILiveable";
import KPICard from "./KPICard";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Hero = styled.div`
  background: linear-gradient(0deg, #ffffff, rgba(255, 255, 255, 0.534)),
    url(${require("../../img/home/hundredday-bg.jpg")}) top center;
  background-size: cover;
  height: 130vh;

  @media (max-width: 992px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: -90vh auto 50px auto;

  width: 1064px;
  max-width: 100%;
  padding: 30px 0;

  @media (max-width: 992px) {
    width: 100%;
    margin: auto;
  }
`;

const SectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;

  color: #37517e;
  text-align: center;
  border-bottom: 7px solid #d43076;

  margin-top: -30vh;
  margin-bottom: 20vh;

  @media (max-width: 992px) {
    margin: 50px 0 0 0;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const HundredDays = () => {
  return (
    <div>
      <Container>
        <Hero></Hero>

        <Wrapper>
          <SectionTitle>Fokus 100 Hari di KPKT</SectionTitle>
          <KPILiveable />
          <KPICard />
        </Wrapper>
      </Container>
    </div>
  );
};

export default HundredDays;
