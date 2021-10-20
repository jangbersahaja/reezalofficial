import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";

import News from "../components/news/news";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Hero = styled.div`
  background: linear-gradient(0deg, #ffffff, rgba(255, 255, 255, 0.3)),
    url(${require("../img/home/lembahsubang3.jpg")}) bottom center;
  background-size: cover;
  height: 60vh;
  color: #fff;

  @media (max-width: 992px) {
    height: 70vh;
  }
`;

const Wrapper = styled.div`
  width: 1064px;
  max-width: 100%;

  margin: -20vh auto 0 auto;
  padding: 30px 0;

  @media (max-width: 992px) {
    width: 100%;
    margin: -20vh auto 0 auto;
  }
`;

const Section = styled.div``;

const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

const Span = styled.span``;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PostArticle = styled.div``;

const PostNews = styled.div`
  width: 30%;
  margin: 15px;

  @media (max-width: 992px) {
    width: 100%;

    margin: 15px 0;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  position: relative;

  margin-bottom: 10px;

  height: 240px;

  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  @media (max-width: 992px) {
    padding: 20px;
  }
`;

const PostVideo = styled.div``;

const PostTitle = styled.h3`
  margin-bottom: 5px;
`;

const PostDesc = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const PostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const PostDate = styled.span`
  font-size: 12px;
`;

const PostSourceWrapper = styled.div``;

const PostSourceImg = styled.img`
  position: absolute;
  bottom: 10px;
  right: 0px;

  padding: ${(props) => props.padding};

  background-color: #ffffffba;

  width: ${(props) => props.width};
`;

const PostType = styled.span`
  font-size: 12px;
`;

const PostTags = styled.div``;

const Tags = styled.span``;

const ReadMore = styled.a`
  font-size: 14px;
  display: block;
  transition: all 0.3s ease-in;
  margin: 20px 0;
  cursor: pointer;
  &:hover {
    color: #d43076;
  }
`;

const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

function Blog() {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero></Hero>
        <Wrapper>
          <Section>
            <SectionTitle>In the News</SectionTitle>

            <Items>
              {News.map((n) => {
                return (
                  <PostNews>
                    <ImgWrapper>
                      <Image src={n.img} />

                      <PostSourceImg src={n.sourceImg} width={n.imgWidth} alt={n.title} padding={n.padding}/>
                    </ImgWrapper>
                    <TextWrapper>
                      <PostDetails>
                        <PostDate>{n.date.toDateString()}</PostDate>
                      </PostDetails>
                      <PostTitle>{n.title}</PostTitle>

                      <LineBreak />
                      <PostDesc>{n.desc}</PostDesc>
                      <ReadMore href={n.source} target="_blank">
                        . . . Read More
                      </ReadMore>
                    </TextWrapper>
                  </PostNews>
                );
              })}
            </Items>
          </Section>
          <LineBreak />
          <Section>
            <SectionTitle>Parliment</SectionTitle>
          </Section>

          <Section>
            <SectionTitle>Videos</SectionTitle>
          </Section>

          <Section>
            <SectionTitle>Social Media</SectionTitle>
          </Section>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
}

export default Blog;
