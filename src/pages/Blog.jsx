import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import BlogHero from "../img/blog-hero.jpg";
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
    url(${BlogHero}) center right;
  background-size: cover;
  height: 100vh;
  color: #fff;

  @media (max-width: 992px) {
    height: 70vh;
  }
`;

const TitleWrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1064px;
  max-width: 100%;

  margin: -50vh auto 0 auto;
  padding: 30px 0;

  @media (max-width: 992px) {
    width: 100%;
    margin: -20vh auto 0 auto;
  }
`;

const SectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 60px;
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

const Post = styled.div`
  display: flex;
  margin: 15px;

  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    flex-direction: column;
    min-height: 300px;
  }
`;

const ImgWrapper = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  @media (max-width: 992px) {
    min-height: 320px;
    flex: auto;
  }
`;

const TextWrapper = styled.div`
  flex: 3;
  padding: 20px;
  overflow: hidden;

  @media (max-width: 992px) {
    min-height: 100px;
    flex: auto;
  }
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Category = styled.a`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding: 5px 10px;
  color: #fff;
  background-color: #2c4964;
  margin: auto 0;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin: auto 0;
`;

const Title = styled.h2`
  margin: 5px 0;
  font-size: 22px;
  font-family: "Playfair Display", serif;
`;

const Desc = styled.p`
  text-align: justify;
  white-space: pre-line;

  font-weight: 100;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LineBreak = styled.hr`
  margin: 5px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

function Blog() {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero>
          <TitleWrapper>
            <SectionTitle>Blog</SectionTitle>
          </TitleWrapper>
        </Hero>
        <Wrapper>
          <Posts>
            {Articles.reverse().map((p) => {
              return (
                <Link to={`/post/${p.id}`}>
                  <Post>
                    <ImgWrapper>
                      <Image src={p.img} />
                    </ImgWrapper>
                    <TextWrapper>
                      <Detail>
                        <Date>{p.date.toDateString()}</Date>
                        <Category>{p.category}</Category>
                      </Detail>
                      <LineBreak/>
                      <Title>{p.title}</Title>
                      {p.desc.map((t, i) => (
                        <Desc key={i} dangerouslySetInnerHTML={t} />
                      ))}
                    </TextWrapper>
                  </Post>
                </Link>
              );
            })}
          </Posts>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
}

export default Blog;
