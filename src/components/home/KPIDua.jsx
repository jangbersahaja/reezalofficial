import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Wifi } from "@material-ui/icons";

const BGContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  background: linear-gradient(rgba(40, 58, 90, 1), rgba(40, 58, 90, 0.5)),
    url(${require("../../img/home/ppr-wifi.jpg")}) center right;
  background-size: cover;
`;

const AboutPost = styled.div`
  display: flex;
  padding: 30px;

  border-top: 0.8px solid rgb(255, 255, 255);
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  flex: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-right: 0.8px solid rgb(255, 255, 255);

  @media (max-width: 992px) {
    border-right: none;
    border-bottom: 0.8px solid rgb(255, 255, 255);
  }
`;

const WifiBorder = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #fff;
`;

const WifiIcon = styled.img`
  margin: auto;
  width: 60%;
  height: 60%;
`;

const WifiText = styled.p`
font-weight: 900;
  color: #fff;
  padding: 0 30px 20px 30px;
  text-align: center;
`;

const PostTextWrapper = styled.div`
  flex: 5;

  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.h2`
  margin: 50px 0 5px 0;
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

  @media (max-width: 992px) {
    ul {
      padding: 0 0;
    }
  }
`;

const AddText = styled.p`
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

  margin: 0 30px;
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

  &:hover {
    background-color: #d43076;
    color: white;
  }
`;

const KPIDua = () => {
  return (
    <div>
      <BGContainer>
        <PostTitle>JENDELA@PPR</PostTitle>
        <AboutPost>
          <ImgWrapper>
            <WifiBorder>
              <WifiIcon src={require("../../img/home/wifi-router.png")} />
            </WifiBorder>
            <WifiText>
              Pemasangan wireless hotspots di common areas seperti surau dan
              dewan di 36 PPR.
            </WifiText>
          </ImgWrapper>
          <PostTextWrapper>
            <PostText>
              <ul>
                <li>
                  Memperluaskan akses dan connectivity internet kepada warga B40
                  yang mendiami PPR
                </li>
                <li>
                  Meningkatkan kesalinghubungan dan kualiti perkhidmatan
                  komunikasi digital bagi memastikan mereka yang mendiami PPR
                  tidak ketinggalan
                </li>
                <li>
                  Membantu golongan peniaga atas talian terutama kaum wanita
                  untuk menceburi bidang ekonomi digital bagi meningkatkan
                  pendapatan keluarga
                </li>
                <li>
                  Memperkenalkan platform pengisian seperti e-Dagang, e-Learning
                  dan e-Communication.
                </li>
              </ul>
            </PostText>

            <LineBreak />
            <AddText>
              Secara keseluruhannya inisiatif ini akan memberi manfaat kepada
              152,764 penghuni di 36 PPR yang terlibat. Bagi tempoh 2022-2025,
              inisiatif ini akan diperluaskan kepada 118 PPR lain di seluruh
              negara bagi meningkatkan daya huni PPR.
            </AddText>
          </PostTextWrapper>
        </AboutPost>
      </BGContainer>
    </div>
  );
};

export default KPIDua;
