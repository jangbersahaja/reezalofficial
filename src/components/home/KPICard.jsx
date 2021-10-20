import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 30px 0;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  margin-bottom: 10px;

  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
`;

const IconLogo = styled.img`
  width: 100%;
`;

const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

const TextWrapper = styled.div`
  @media (max-width: 992px) {
    padding: 20px;
  }
`;

const Title = styled.h2``;

const Desc = styled.p`
font-size: 14px;
line-height: 1.5;
text-align: justify;
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

const KPICard = () => {
  return (
    <div>
      <Wrapper>
        <Card>
          <IconWrapper>
            <IconLogo src={require("../../img/home/rumah-ikram3.jpg")} />
          </IconWrapper>
          <TextWrapper>
            <Title>2. Rumah IKRAM Keluarga Malaysia</Title>
            <LineBreak />
            <Desc>
              Inisiatif ini dirangka secara bersasar dengan tumpuan kepada
              golongan B40 yang terjejas pendapatan akibat COVID-19 dan layak
              mendapat manfaat dari program ini.
            </Desc><LineBreak />
            <ReadMore to="/rumahikram">Click to read</ReadMore>
          </TextWrapper>
        </Card>

        <Card>
          <TextWrapper>
            <Title>3. JENDELA@PPR</Title>
            <LineBreak />
            <Desc>
              Pemasangan wireless hotspots di common areas seperti surau dan
              dewan di 36 PPR bagi memperluaskan akses dan connectivity internet
              kepada warga B40.
            </Desc><LineBreak />
            <ReadMore to="">Click to read</ReadMore>
          </TextWrapper>
          <IconWrapper>
            <IconLogo src={require("../../img/home/ppr.jpg")} />
          </IconWrapper>
        </Card>

        <Card>
          <TextWrapper>
            <Title>4. Program Transformasi Pasar Malam KPKT</Title>
            <LineBreak />
            <Desc>
              Inisiatif dirangka bagi tujuan memperkenalkan projek rintis /
              pilot project yang memberi wajah baharu kepada peniaga-peniaga
              kecil dan bertujuan meningkatkan keyakinan pengunjung pasar malam
              dengan memperkenalkan amalan norma baharu bagi pengoperasian pasar
              malam.
            </Desc>
            <LineBreak />
            <ReadMore to="">Click to read</ReadMore>
          </TextWrapper>
        </Card>
      </Wrapper>
    </div>
  );
};

export default KPICard;
