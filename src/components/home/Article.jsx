import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Articles from "../article/article";

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
  margin: 50px 0;
  color: #37517e;
  text-align: center;
  border-bottom: 7px solid #d43076;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Post = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ImgsWrapper = styled.div`
  width: 66%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;

  position: relative;
  height: 500px;
  overflow: hidden;

  @media (max-width: 992px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 300px;
  }
`;

const Image = styled.div`
  height: 100%;
  width: 100%;

  background: url(${(props) => props.src}) center center;
  background-size: cover;
  object-fit: cover;
`;

const Text = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 0 40px;
  @media (max-width: 992px) {
    padding: 20px 40px;
  }
`;

const Date = styled.span`
  font-size: 12px;
  margin: auto 0;
`;

const Title = styled.h2`
  font-size: 22px;
  line-height: 1;
`;

const PostText = styled.p`
  text-align: justify;
  white-space: pre-line;
  font-size: 14px;
  line-height: 1.5;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 14;
  -webkit-box-orient: vertical;

  li {
    display: none;
  }
`;

const ButtonDiv = styled.div`
  display: flex;

  margin: 20px 30px 50px 30px;
  justify-content: space-between;
`;

const ReadMore = styled(Link)`
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

const MoreArticle = styled(Link)`
  text-align: center;
  font-size: 14px;

  background-color: #d43076;
  color: white;
  transition: all 0.3s ease-in;
  border: 2px solid #d43076;
  margin-top: 30px;
  padding: 10px 20px;
  &:hover {
    background-color: #b32160;
  }
`;

const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

const Article = () => {
  const featured = "3";
  const post = Articles.filter((e) => e.id === featured);

  return (
    <Container>
      <Wrapper>
        <SectionTitle>Featured Article</SectionTitle>
        {post.map((p) => {
          return (
            <>
              <Post>
                <ImgsWrapper>
                  <Image src={p.img} />
                </ImgsWrapper>

                <Text>
                  <Desc>
                    <Date>{p.date.toDateString()}</Date>
                    <LineBreak />
                    <Title>{p.title}</Title>
                    <LineBreak />
                    {p.desc.map((t, i) => (
                      <PostText
                        key={i}
                        className="text"
                        dangerouslySetInnerHTML={t}
                      />
                    ))}
                    <LineBreak />
                    <ReadMore to={`/post/${p.id}`}>Click to read</ReadMore>
                  </Desc>
                </Text>
              </Post>
            </>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Article;
