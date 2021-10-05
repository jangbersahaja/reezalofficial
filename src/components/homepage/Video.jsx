import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(180deg, #f2f6f9 0%, #fff 100%);
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 1064px;
  max-width: 100%;
  padding: 30px 0;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: #37517e;
  text-align: center;

  border-bottom: 7px solid #d43076;
`;

const Gallery = styled.div`
  width: 1140px;
  display: flex;
  justify-content: center;
  align-content: center;
  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
  }
`;

const VideoWrapper = styled.div`
  flex: 4;
  height: 520px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
    width: 100%;
    height: 300px;
  }
`;

const Slider = styled.div`
  flex: 1;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  @media (max-width: 992px) {
    flex-direction: row;
    width: 100%;
    margin: 5px 0;
  }
`;

const SmallVid = styled.div`
  flex: 1;
  margin: 5px;
  background-color: blanchedalmond;
`;

const Video = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>Featured Video</SectionTitle>
        <Gallery>
          <VideoWrapper>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/IoBwCifLNew?autoplay=1&mute=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </VideoWrapper>
          <Slider>
            <SmallVid>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/IoBwCifLNew?&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </SmallVid>
            <SmallVid>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/IoBwCifLNew?&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </SmallVid>
            <SmallVid>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/IoBwCifLNew?&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </SmallVid>
          </Slider>
        </Gallery>
      </Wrapper>
    </Container>
  );
};

export default Video;
