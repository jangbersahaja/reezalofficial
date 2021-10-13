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
    url(${require("../../img/home/pasar-malam.jpg")}) center right;
  background-size: cover;
`;

const AboutPost = styled.div`
  display: flex;
  flex-direction: row-reverse;
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

  border-left: 0.8px solid rgb(255, 255, 255);

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
  width: 240px;
`;

const WifiIcon = styled.img`
  margin: auto;
  width: 100%;
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

const KPITiga = () => {
  return (
    <div>
      <BGContainer>
        <PostTitle>Program Transformasi Pasar Malam KPKT</PostTitle>
        <AboutPost>
          <ImgWrapper>
            <WifiBorder>
              <WifiIcon src={require("../../img/home/keluarga-malaysia.png")} />
            </WifiBorder>
            <WifiText>
            Imej yang lebih menarik dengan menonjolkan keseragaman daripada segi khemah dan apron dengan tagline “Keluarga Malaysia @ KPKT”.

            </WifiText>
          </ImgWrapper>
          <PostTextWrapper>
            <PostText>
              <p class="p1">
                Inisiatif dirangka bagi tujuan memperkenalkan{" "}
                <strong>projek rintis / pilot project </strong>yang memberi{" "}
                <strong>wajah baharu </strong>kepada peniaga-peniaga kecil dan
                bertujuan <strong>meningkatkan keyakinan pengunjung </strong>
                pasar malam dengan memperkenalkan{" "}
                <strong>amalan norma baharu</strong> bagi{" "}
                <strong>pengoperasian pasar malam.</strong>
              </p>
              <p class="p2">&nbsp;</p>
              <p class="p1">
                KPKT akan mengintegrasikan keperluan di bawah Garis Panduan
                Pengurusan Pasar Malam KPKT dan SOP Pasar Malam Majlis
                Keselamatan Negara (MKN) supaya pasar malam di PBT diberi imej
                baharu dan pengoperasian yang seragam.
                <span class="Apple-converted-space">&nbsp;</span>
              </p>
              <p class="p2">&nbsp;</p>
              <p class="p1">
                Elemen-elemen utama yang akan diberi penekanan dalam program ini
                termasuklah penjarakan gerai, perimeter antara peniaga dan
                pelanggan serta yang paling utama pematuhan kepada SOP MKN.
              </p>
              <p class="p2">&nbsp;</p>
              <p class="p1">
                Antara transformasi yang akan diperkenalkan melihat kepada{" "}
                <strong>imej yang lebih menarik</strong> dengan menonjolkan
                keseragaman daripada segi khemah dan apron dengan{" "}
                <em>tagline</em> &ldquo;
                <strong>Keluarga Malaysia @ KPKT</strong>&rdquo;.
              </p>
            </PostText>
          </PostTextWrapper>
        </AboutPost>
      </BGContainer>
    </div>
  );
};

export default KPITiga;
