import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

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

  min-height: 70vh;
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
  margin: 50px 0;
  color: #37517e;
  text-align: center;
  border-bottom: 7px solid #d43076;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Gallery = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const VideoWrapper = styled.div`
  flex: 4;
  position: relative;
  padding-top: 56.25%;

  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.2);
`;

const VideoPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
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
            <VideoPlayer
            url={[
              'https://www.youtube.com/watch?v=o0G8Hbja8AQ&t=1s',
              'https://www.youtube.com/watch?v=IoBwCifLNew&t=1s',
              'https://www.youtube.com/watch?v=F1w8LUTX2SY',
              'https://www.youtube.com/watch?v=fIoAdufQbZI&t=21s'
            ]}
              width="100%"
              height="100%"
              controls
            />
          </VideoWrapper>
        </Gallery>
      </Wrapper>
    </Container>
  );
};

export default Video;
