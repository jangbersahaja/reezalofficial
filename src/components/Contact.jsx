import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(180deg, #f2f6f9 0%, #fff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 80vw;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

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

const Column = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 992px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  background: linear-gradient(
    270deg,
    rgba(44, 73, 100, 0),
    rgba(44, 73, 100, 0.1)
  );

  @media (max-width: 768px) {
    background: none;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 1;
  margin-bottom: 40px;
`;

const ItemTitle = styled.h2`
  font-size: 24px;
`;

const PostText = styled.p`
  white-space: pre-wrap;
  margin-bottom: 20px;
`;

const FormWrapper = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: #37517e;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.h2`
  font-size: 18px;
  color: #fff;
  margin: 5px;
`;

const Input = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;

  &::placeholder {
    opacity: 0.5;
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  font-family: sans-serif;

  &::placeholder {
    opacity: 0.5;
  }
`;

const SubmitButton = styled.button`
  background-color: #d43076;
  color: white;
  transition: all 0.3s ease-in;
  border: 2px solid #d43076;
  margin-top: 30px;
  padding: 10px 20px;
  &:hover {
    background-color: #dd176d;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>Contact</SectionTitle>
        <Column>
          <Text>
            <Desc>
              <Title>Have a message to share with Reezal Merican?</Title>
              <ItemTitle>Address.</ItemTitle>
              <PostText>
                Kementerian Perumahan dan {"\n"}Kerajaan Tempatan{"\n"}Aras 18, No. 51,
                Persiaran Perdana, {"\n"}Presint 4, 62100 Putrajaya
              </PostText>
              <ItemTitle>Phone Number.</ItemTitle>
              <PostText>01-234 5678</PostText>
              <ItemTitle>Email.</ItemTitle>
              <PostText>admin@reezalmericanofficial.com</PostText>
            </Desc>
          </Text>
          <FormWrapper>
            <Form>
              <Label>Name.</Label>
              <Input placeholder="Muhammad Amir"></Input>
              <Label>Email.</Label>
              <Input placeholder="amir@gmail.com"></Input>
              <Label placeholder="Name">Phone.</Label>
              <Input placeholder="011-213 4456"></Input>
              <Label>Message.</Label>
              <TextArea rows="5" placeholder="Mesej"></TextArea>
              <SubmitButton>Submit Message</SubmitButton>
            </Form>
          </FormWrapper>
        </Column>
      </Wrapper>
    </Container>
  );
};

export default Contact;
