import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import PostImg from "../img/home/article1.jpg";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import Articles from "../components/article/article";

const Container = styled.div`
  background-color: #2c4964;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Hero = styled.div`
  background: linear-gradient(
      0deg,
      rgba(44, 73, 100, 1),
      rgba(255, 255, 255, 0.3)
    ),
    url(${(props) => props.bg}) center center;
  background-size: cover;
  height: 100vh;
  color: #fff;

  @media (max-width: 992px) {
    height: 50vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1064px;
  max-width: 100%;

  margin: -40vh auto 0 auto;
  padding: 30px 0;

  @media (max-width: 992px) {
    width: 100%;
    margin: 10vh auto 0 auto;
  }
`;

const TitleWrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h2`
  width: 1064px;
  max-width: 100%;
  margin: 0 auto;

  font-family: "Playfair Display", serif;
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Paper = styled.div`
  display: flex;

  margin: 0 15px 30px 15px;

  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  flex: 3;
  padding: 30px;

  @media (max-width: 992px) {
    flex: 2;
  }
`;

const Category = styled.a`
  font-size: 12px;
  font-weight: bold;

  width: 100px;
  padding: 5px 10px;
  margin-right: 30px;

  border: 2px solid #2c4964;
  border-radius: 20px;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const Desc = styled.p`
  text-align: justify;
  white-space: pre-line;
  margin: 30px 0;
`;

const BackBtn = styled(Link)`
  position: fixed;
  top: 15vh;
  left: 5vh;
  z-index: 99;
  background: #d43076;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowBackBtn = styled(ArrowBack)`
  color: #fff;
`;

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const post = Articles.filter((e) => e.id === path);

  return (
    <div>
      <Navbar />
      <Container>
        <BackBtn to="/blog">
          <ArrowBackBtn />
        </BackBtn>
        {post.map((p) => {
          return (
            <>
              <Hero bg={p.img}>
                <TitleWrapper>
                  <SectionTitle>{p.title}</SectionTitle>
                </TitleWrapper>
              </Hero>
              <Wrapper>
                <Posts>
                  <Paper>
                    <TextWrapper>
                      <Category>{p.category}</Category>
                      <Date>{p.date.toDateString()}</Date>

                      {p.desc.map((t, i) => (
                        <Desc
                          key={i}
                          className="text"
                          dangerouslySetInnerHTML={t}
                        />
                      ))}
                    </TextWrapper>
                  </Paper>
                </Posts>
              </Wrapper>
            </>
          );
        })}
      </Container>
      <Footer />
    </div>
  );
}

export default SinglePost;
