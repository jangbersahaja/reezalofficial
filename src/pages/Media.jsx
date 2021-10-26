import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";

import News from "../components/news/news";
import MediaHouse from "../components/news/mediahouse";
import ReactPlayer from "react-player";

const Container = styled.div`
  background-color: rgba(44, 73, 100, 1);
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
    url("https://drive.google.com/uc?id=1QGhSm3OvY2IgGta9ipxdMpfJdumUcz54")
      center center;
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
  margin-bottom: 50px;
`;

const SectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  margin: 30px 0;
  color: #fff;
  text-align: center;
`;


const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;


//NEWS SECTION

const PostNews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 32%;
  margin: 10px 0;

  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  @media (max-width: 992px) {
    width: 48%;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 10px 0;
  }
`;

const ShowMoreNews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 32%;
  margin: 10px 0;

  @media (max-width: 992px) {
    width: 48%;
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

  margin: 0 15px 10px 15px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  position: relative;

  margin-bottom: 10px;

  height: 200px;
  width: 100%;

  @media (max-width: 992px) {
    height: 240px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  margin: 5px 15px 0 15px;
  @media (max-width: 992px) {
    padding: 0 5px;
  }
`;

const PostTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 18px;
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


const PostSourceImg = styled.img`
  position: absolute;
  bottom: 10px;
  right: 0px;

  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
`;




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

//PARLIAMENT SECTION

const PostVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 48%;
  margin: 10px 0;

  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  @media (max-width: 768px) {
    width: 95%;
    margin: 10px 0;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;

  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.2);
`;

const VideoPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const VideoTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 18px;
`;

const VideoDate = styled.span`
  font-size: 12px;
  margin: auto 0;
`;


const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

const Media = () => {
  const [visible, setVisible] = useState(5);

  const sortedNews = News.sort((a, b) => b.date - a.date)
    .slice(0, visible)
    .map((n) => {
      return (
        <PostNews key={n.id}>
          <CardContent>
            <ImgWrapper>
              <Image src={n.img} alt={n.title} />
              {MediaHouse.filter((m) => m.name === n.media).map((m) => {
                return (
                  <PostSourceImg
                    key={m.id}
                    src={m.img}
                    width={m.width}
                    padding={m.padding}
                    bg={m.background}
                  />
                );
              })}
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
            <ReadMore href={n.source} target="_blank" rel="noopener noreferrer">
              Click to read
            </ReadMore>
          </CardEnd>
        </PostNews>
      );
    });

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const parliamentVideo = [
    {
      title: "Penggulungan Rancangan Malaysia Ke-14 bagi KPKT",
      source: "https://www.youtube.com/watch?v=B-SWtMmcx2g",
      date: new Date("2021-10-07"),
    },
    {
      title: "Waktu Pertanyaan Menteri",
      source: "https://youtu.be/Tx4gN2Bn-HM",
      date: new Date("2021-10-06"),
    },
    {
      title: "Sesi Jawab Lisan",
      source: "https://youtu.be/F1w8LUTX2SY",
      date: new Date("2021-09-22"),
    },
    {
      title: "Sesi Jawab Lisan",
      source: "https://youtu.be/IQvoHrDHSaI",
      date: new Date("2021-09-22"),
    },
  ];

  const sortedParliamentVideo = parliamentVideo
    .sort((a, b) => b.date - a.date)
    .map((v, i) => {
      return (
        <PostVideo key={i}>
          <CardContent>
            <TextWrapper>
              <PostDetails>
                <VideoDate>{v.date.toDateString()}</VideoDate>
              </PostDetails>
              <VideoTitle>{v.title}</VideoTitle>
            </TextWrapper>
            <VideoWrapper>
              <VideoPlayer
                url={v.source}
                width="100%"
                height="100%"
                controls
                light
              />
            </VideoWrapper>
          </CardContent>
        </PostVideo>
      );
    });

  return (
    <div>
      <Navbar />
      <Container>
        <Hero></Hero>
        <Wrapper>
          <Section>
            <SectionTitle>In the News</SectionTitle>
            <Items>
              {sortedNews}
              <ShowMoreNews>
                <ShowMoreButton onClick={showMoreItems}>
                  Show More
                </ShowMoreButton>
              </ShowMoreNews>
            </Items>
          </Section>
          <Section>
            <SectionTitle>Parliament</SectionTitle>
            <Items>{sortedParliamentVideo}</Items>
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
};

export default Media;
