import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BGContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  background: linear-gradient(
      90deg,
      rgba(40, 58, 90, 0.5),
      rgba(40, 58, 90, 0.9)
    ),
    url(${require("../../img/home/rumah-ikram2.jpg")}) center left;
  background-size: cover;
`;

const AboutPost = styled.div`
display: flex;
justify-content: flex-end;
`;

const PostTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 30px 0;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const PostTitle = styled.h2`
  padding: 0 30px;
  font-size: 42px;
  font-family: "Playfair Display", serif;
  line-height: 1.2;
  font-weight: 600;
  color: #fff;

  @media (max-width: 992px) {
    font-size: 36px;
  }
`;

const PostText = styled.p`
  color: #fff;
  padding: 20px 30px;
  text-align: justify;
  white-space: pre-line;
`;

const LineBreak = styled.hr`
  margin: 5px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgb(255, 255, 255);
`;

const ButtonDiv = styled.div`
  display: flex;

  margin: 20px 30px 50px 30px;
  justify-content: space-between;
`;

const ReadMore = styled(Link)`
  text-align: center;
  font-size: 14px;
  color: white;
  transition: all 0.3s ease-in;
  border: 2px solid #d43076;
  padding: 10px 20px;
  cursor: pointer;

  @media (max-width: 992px) {
    display: block;
  }

  &:hover {
    background-color: #d43076;
    color: white;
  }
`;

const KPISatu = () => {
  return (
    <div>
      <BGContainer>
        <AboutPost>
          <PostTextWrapper>
            <PostTitle>Rumah IKRAM Keluarga Malaysia</PostTitle>
            <LineBreak />
            <PostText>
              <p class="p1">
                <strong>Inisiatif ini dirangka secara bersasar</strong> dengan
                tumpuan kepada golongan B40 yang terjejas pendapatan akibat
                COVID-19 dan layak mendapat manfaat dari program ini.
              </p>
              <p class="p2">&nbsp;</p>
              <p class="p1">
                Sebanyak <strong>2,000 unit</strong> <strong>sewaan</strong>{" "}
                <strong>Rumah Ikram Keluarga Malaysia </strong>ditawarkan{" "}
                <strong>selama 2 tahun</strong> pada <strong>kadar yang</strong>{" "}
                <strong>paling minima </strong>
                iaitu<strong> RM124</strong> dengan{" "}
                <strong>insentif pengecualian</strong>{" "}
                <strong>sewaan selama 6 bulan</strong> oleh Kerajaan bagi
                membantu mengurangkan beban kewangan yang ditanggung oleh
                penerima manfaat.
                <span class="Apple-converted-space">&nbsp;</span>
              </p>
            </PostText>
            <ButtonDiv>
              <ReadMore>Pautan Permohonan</ReadMore>
              <ReadMore>Bacaan Lanjut</ReadMore>
            </ButtonDiv>
          </PostTextWrapper>
        </AboutPost>
      </BGContainer>
    </div>
  );
};

export default KPISatu;
