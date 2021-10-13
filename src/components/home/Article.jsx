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
  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ImgsWrapper = styled.div`
  flex: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;

  position: relative;
  height: 70vh;
  overflow: hidden;

  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
    height: 500px;
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
  flex: 2;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
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
  font-weight: bold;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 1;
  margin: 20px 0;
`;

const PostText = styled.p`
  text-align: justify;
  white-space: pre-line;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;

  li {
    display: none;
  }
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
  const featured = "2";
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
                    <Title>{p.title}</Title>
                    {p.desc.map((t, i) => (
                        <PostText
                          key={i}
                          className="text"
                          dangerouslySetInnerHTML={t}
                        />
                      ))}
                    <ReadMore to={`/post/${p.id}`}>Read This Article</ReadMore>
                    <MoreArticle to="/blog">More Article</MoreArticle>
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
