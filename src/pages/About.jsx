import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ProfilePhoto from "../img/profile.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 1064px;
  max-width: 100%;

  height: 100vh;

  margin: 30px auto;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    rgba(44, 73, 100, 0),
    rgba(44, 73, 100, 0),
    rgba(44, 73, 100, 0.25),
    rgba(44, 73, 100, 0.5),
    rgba(44, 73, 100, 0.75),
    rgba(44, 73, 100, 1)
  );

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  content: "";
  height: 600px;
  width: 500px;
  background: url(${ProfilePhoto}) center center;
  background-size: cover;

  @media (max-width: 960px) {
    height: 55vh;
  }
`;

const TextWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 30px;
`;

const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: #37517e;
  text-align: center;
  border-bottom: 7px solid #d43076;
  
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Text = styled.p`
  white-space: pre-line;
  text-align: justify;
`;

function About() {
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <ImgWrapper>
            <Image />
          </ImgWrapper>
          <TextWrapper>
            <Title>About Me</Title>
            <Text>
              Politician, Member of Parliament for Kepala Batas, and serves the
              Malaysian Government. Reezal Merican Naina Merican is the current
              Minister of Housing and Local Government.
              {"\n"} {"\n"}
              During his tenure as the Minister of Youth and Sports, Reezal has
              devoted his career to focus on strengthening Youth and Malaysian
              Athletes. He has led the Malaysian Contingent during the Tokyo
              2020 Olympics where the athletes successfully brought home one
              silver and one bronze medal.
              {"\n"} {"\n"}
              He is involved in various initiatives under both state and
              national programmes advocating for the long-term benefit of
              Malaysian society and the world community.
              {"\n"} {"\n"}
              His past experience also includes a strong portfolio serving in
              both policy-making and foreign affairs throughout his career.
            </Text>
          </TextWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
