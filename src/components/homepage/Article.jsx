import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Liveable from "../../img/homepage/liveable2.jpg";

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

const Post = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 1140px;
  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ImgWrapper = styled.div`
  flex: 3;
  height: 80vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const Text = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 20px 70px;
  @media (max-width: 992px) {
    padding: 20px 50px;
  }
`;

const Date = styled.span`
  align-self: flex-start;
`;

const Title = styled.h1`
  margin-top: 20px;
  font-size: 4em;
  line-height: 1;
  margin-bottom: 20px;
`;

const PostText = styled.p`
  text-align: justify;
  white-space: pre-line;
`;

const ReadMore = styled(Link)`
  text-align: center;
  font-size: 14px;

  background-color: #fff;
  transition: all 0.3s ease-in;
  border: 2px solid #d43076;
  margin-top: 30px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #d43076;
    color: white;
  }
`;

const MoreArticle = styled(Link)`
  text-align: center;
  font-size: 14px;

  background-color: #d43076;
  color: white;
  transition: all 0.3s ease-in;
  border: 2px solid #d43076;
  margin-top: 10px;
  padding: 10px 20px;
  &:hover {
    background-color: #b32160;
  }
`;

const Article = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>Featured Article</SectionTitle>
        <Post>
          <ImgWrapper>
            <Image src={Liveable} />
          </ImgWrapper>
          <Text>
            <Desc>
              <Date>1 Hour Ago</Date>
              <Title>Liveable Malaysia</Title>
              <PostText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                cumque autem aperiam enim? Sit sequi fuga magni quisquam! Quae
                vero dolorum inventore vitae expedita quasi adipisci eum quidem
                possimus earum.
                {"\n"} {"\n"}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                cumque autem aperiam enim? Sit sequi fuga magni quisquam! Quae
                vero dolorum inventore vitae expedita quasi adipisci eum quidem
                possimus earum.
              </PostText>
              <ReadMore to = "">Read This Article</ReadMore>
              <MoreArticle to="/blog">More Article</MoreArticle>
            </Desc>
          </Text>
        </Post>
      </Wrapper>
    </Container>
  );
};

export default Article;
