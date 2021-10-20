import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";

import News from "../components/news/news";
import MediaHouse from "../components/news/mediahouse";

const Container = styled.div`
  background-color: rgba(44, 73, 100, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Hero = styled.div`
  background: linear-gradient(0deg,rgba(44, 73, 100, 1),
      rgba(255, 255, 255, 0.3)),
    url("https://drive.google.com/uc?id=1QGhSm3OvY2IgGta9ipxdMpfJdumUcz54") center center;
  background-size: cover;
  height: 70vh;
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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Span = styled.span``;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PostArticle = styled.div``;

const PostNews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 29%;
  margin: 5px;
  padding: 15px;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  @media (max-width: 992px) {
    width: 44%;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 10px 0;
  }
`;

const CardContent = styled.div``;

const CardEnd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  position: relative;

  margin-bottom: 10px;

  height: 200px;
  width: 100%;

  overflow: hidden;
  border-radius: 10px;

  @media (max-width: 992px) {
    height: 240px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  @media (max-width: 992px) {
    padding: 0 10px;
  }
`;

const PostVideo = styled.div``;

const PostTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 16px;
`;

const PostDesc = styled.p`
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`;

const PostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const PostDate = styled.span`
  font-size: 12px;
  margin: auto 0;
`;

const PostSourceWrapper = styled.div``;

const PostSourceImg = styled.img`
  position: absolute;
  bottom: 10px;
  right: 0px;

  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
`;

const PostType = styled.span`
  font-size: 12px;
`;

const PostTags = styled.div``;

const Tags = styled.span``;

const ReadMore = styled.a`
  text-align: center;
  font-size: 14px;
  display: block;
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-weight: 900;
  &:hover {
    color: #d43076;
  }
`;

const ShowMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 29%;
  margin: 5px;
  padding: 15px;

  @media (max-width: 992px) {
    width: 44%;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 10px 0;
  }
`;

const ShowMoreButton = styled.button`
  height: 120px;
  width: 120px;
  margin: auto;
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
    width: 200px;
    height: 300px;
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
  const sortedNews = News.sort((a, b) => b.date - a.date);

  const [visible, setVisible] = useState(5);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Hero></Hero>
        <Wrapper>
          <Section>
            <SectionTitle>In the News</SectionTitle>

            <Items>
              {sortedNews.slice(0, visible).map((n) => {
                return (
                  <PostNews>
                    <CardContent>
                      <ImgWrapper>
                        <Image src={n.img} alt={n.title} />
                        {MediaHouse.filter((m) => m.name === n.media).map(
                          (m) => {
                            return (
                              <PostSourceImg
                                src={m.img}
                                width={m.width}
                                padding={m.padding}
                                bg={m.background}
                              />
                            );
                          }
                        )}
                      </ImgWrapper>
                      <TextWrapper>
                        <PostDetails>
                          <PostDate>{n.date.toDateString()}</PostDate>
                        </PostDetails>
                        <PostTitle>{n.title}</PostTitle>

                        <LineBreak />
                        <PostDesc>{n.desc}</PostDesc>
                      </TextWrapper>
                    </CardContent>
                    <CardEnd>
                      <LineBreak />
                      <ReadMore href={n.source} target="_blank">
                        Click to read
                      </ReadMore>
                    </CardEnd>
                  </PostNews>
                );
              })}
              <ShowMore>
                <ShowMoreButton onClick={showMoreItems}>
                  Show More
                </ShowMoreButton>
              </ShowMore>
            </Items>
          </Section>
          <Section>
            <SectionTitle>Parliament</SectionTitle>
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
