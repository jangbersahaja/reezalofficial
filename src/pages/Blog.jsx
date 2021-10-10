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
    min-height: 700px;
  }
`;

const ImgWrapper = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  height: 350px;
  width: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  flex: 3;
  padding: 30px;
  overflow: hidden;

  @media (max-width: 992px) {
    min-height: 200px;
    flex: auto;
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

const Title = styled.h2`
  margin: 20px 0;
`;

const Desc = styled.p`
  text-align: justify;
  white-space: pre-line;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
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
            {
            Articles.reverse().map((p) => {
              return (
                <Link to = {`/post/${p.id}`}  >
                  <Post>
                    <ImgWrapper>
                      <Image src={p.img} />
                    </ImgWrapper>
                    <TextWrapper>
                      <Category>{p.category}</Category>
                      <Date>{p.date.toDateString()}</Date>
                      <Title>
                        {p.title}
                      </Title>
                      {p.desc.map((t, i) => (
                        <Desc
                          key={i}
                          className="text"
                          dangerouslySetInnerHTML={t}
                        />
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
