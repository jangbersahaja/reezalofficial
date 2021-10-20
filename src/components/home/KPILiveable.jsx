import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BGContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const Post = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ImgsWrapper = styled.div`
  width: 65%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 500px;

  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
    height: 550px;
  }
`;

const Image = styled.div`
  position: relative;
  height: 100%;
  width: 33%;

  background: url(${(props) => props.src}) center center;
  background-size: cover;
  object-fit: cover;
  filter: contrast(2);

  @media (max-width: 992px) {
    margin: 0;
    height: 33%;
    width: 100%;
  }

  :before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${(props) => props.bg};
  }
`;

const TextWrapper = styled.div`
  width: 30%;

  @media (max-width: 992px) {
    padding: 20px;
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  line-height: 1;
`;

const PostText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 14;
  -webkit-box-orient: vertical;

  li {
    display: none;
  }
`;

const ReadMore = styled(Link)`
  text-align: center;
  font-size: 14px;
  display: block;
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-weight: 900;
  margin-bottom: 20px;
  &:hover {
    color: #d43076;
  }
`;

const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

const KPILiveable = () => {
  return (
    <BGContainer>
      <Post>
        <ImgsWrapper>
          <Image
            src={require("../../img/home/liveable1.jpg")}
            bg="#5b6f7c79"
            m="-60px"
          />

          <Image
            src={require("../../img/home/liveable2.jpg")}
            bg="#5b6f7c79"
            m="60px"
          />

          <Image
            src={require("../../img/home/liveable3.jpg")}
            bg="#5b6f7c79"
            m="-60px"
          />
        </ImgsWrapper>

        <TextWrapper>
          <Title>Agenda Liveable Malaysia</Title>
          <LineBreak />
          <PostText>
            Malaysia Yang Berdaya Huni ini meliputi aspek{" "}
            <strong>persekitaran kediaman dan pembangunan</strong> yang bukan
            sahaja berkualiti malah ada <em>last-miles connectivity</em>,
            lengkap dengan infrastruktur asas yang selesa, akses internet
            meluas, akses kepada fasiliti kesihatan dan pendidikan serta
            disokong dengan dasar-dasar operasi Kerajaan Tempatan yang berkesan
            (<em>effective</em>) dan memberi kesan (<em>impactful</em>) kepada{" "}
            <em>livelihood</em> rakyat.
            <br />
            <br />
            Dalam hal ini,{" "}
            <strong>
              satu ukuran atau measurement iaitu Livability Index yang akan
              diperkenalkan permulaannya di kawasan PPR
            </strong>
            <br />
            <br />
            Ini akan didokong dengan <strong>strategi 3S</strong> iaitu{" "}
            <strong>
              SIHAT, SELAMAT DAN SEJAHTERA untuk Keluarga Malaysia
            </strong>
            .<br />
            <br />
            Antara <strong>program atau</strong>{" "}
            <strong>
              <em>deliverables</em>
            </strong>{" "}
            yang sedang dikenal pasti oleh KPKT adalah:
            <br />
            <br />
            <ul>
              <li>
                <strong>
                  Program Pemilikan Kediaman oleh Golongan Muda @ Own At Young
                </strong>
                .
              </li>
              <li>
                <strong>Program Waste to Wealth</strong>.
              </li>
              <li>
                <strong>Program MyBeautiful Keluarga Malaysia</strong>.
              </li>
              <li>
                <strong>Program Peniaga Sejahtera @ KPKT</strong>
                <strong>.</strong>
              </li>
              <li>
                <strong>Program MOVAK 2.0</strong>&nbsp;
              </li>
              <li>
                <strong>Program Pembangunan Semula Bandar</strong>.
              </li>
            </ul>
          </PostText>
          <LineBreak />
          <ReadMore to="">Click to read</ReadMore>
        </TextWrapper>
      </Post>
    </BGContainer>
  );
};

export default KPILiveable;
