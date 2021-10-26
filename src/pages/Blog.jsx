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

  overflow: hidden;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 300px;
  }
`;

const ImgWrapper = styled.div`
  flex: 2;
  display: flex;

  @media (max-width: 992px) {
    flex: 1;
  }
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
    flex: 1;
  }
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Category = styled.span`
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

  font-size: 14px;
  line-height: 1.5;
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

const ShowMore = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 50px 0;

`;

const ShowMoreButton = styled.button`
  height: 120px;
  width: 120px;
  margin: 15px;
  padding: 10px;

  font-size: 14px;
  font-weight: 900;

  border: none;
  color: #fff;
  background: #d43076;
  border-radius: 60px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  transition: all 0.4s;

  &:hover {
    width: 100%;
    border-radius: 10px;
  }
`;

const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

function Blog() {
  const sortedArticles = Articles.sort((a, b) => b.date - a.date);

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
            {sortedArticles.map((p) => {
              return (
                <Link key={p.id} to={`/post/${p.id}`}>
                  <Post >
                    <ImgWrapper>
                      <Image  src={p.img} />
                    </ImgWrapper>
                    <TextWrapper>
                      <Detail>
                        <Date>{p.date.toDateString()}</Date>
                        <Category>{p.category}</Category>
                      </Detail>
                      <LineBreak />
                      <Title>{p.title}</Title>
                      {p.desc.map((t, i) => (
                        <Desc key={i} dangerouslySetInnerHTML={t} />
                      ))}
                    </TextWrapper>
                  </Post>
                </Link>
              );
            })}
            <ShowMore>
              <ShowMoreButton >Show More</ShowMoreButton>
            </ShowMore>
          </Posts>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
}

export default Blog;
