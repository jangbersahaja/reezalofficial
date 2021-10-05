import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import PostImg from "../img/homepage/article-pm.jpg";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";

const Container = styled.div`
  background-color: #2c4964;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Hero = styled.div`
  background: linear-gradient(
      0deg,
      rgba(44, 73, 100, 1),
      rgba(255, 255, 255, 0.3)
    ),
    url(${PostImg}) center center;
  background-size: cover;
  height: 100vh;
  color: #fff;

  @media (max-width: 992px) {
    height: 50vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1064px;
  max-width: 100%;

  margin: -40vh auto 0 auto;
  padding: 30px 0;

  @media (max-width: 992px) {
    width: 100%;
    margin: 10vh auto 0 auto;
  }
`;

const TitleWrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h2`
  width: 1064px;
  max-width: 100%;
  margin: 0 auto;

  font-family: "Playfair Display", serif;
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Paper = styled.div`
  display: flex;

  margin: 0 15px 30px 15px;

  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  flex: 3;
  padding: 30px;

  @media (max-width: 992px) {
    flex: 2;
  }
`;

const Category = styled.a`
  font-size: 12px;
  font-weight: bold;

  width: 100px;
  padding: 5px 10px;
  margin-right: 30px;

  border: 2px solid #2c4964;
  border-radius: 20px;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const Desc = styled.p`
  text-align: justify;
  white-space: pre-line;
  margin: 30px 0;
`;

const BackBtn = styled(Link)`
  position: fixed;
  top: 15vh;
  left: 5vh;
  z-index: 99;
  background: #d43076;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowBackBtn = styled(ArrowBack)`
  color: #fff;
`;

function Post2() {
  return (
    <div>
      <Navbar />
      <Container>
        <BackBtn to="/blog">
          <ArrowBackBtn />
        </BackBtn>
        <Hero>
          <TitleWrapper>
            <SectionTitle>
              Terima Kasih Yab PM. Pengecualian Sewa 6 Bulan Kepada Penerima
              Manfaat 2,000 Unit Rumah Ikram Keluarga Malaysia
            </SectionTitle>
          </TitleWrapper>
        </Hero>
        <Wrapper>
          <Posts>
            <Paper>
              <TextWrapper>
                <Category>Though</Category>
                <Date>25 Sep 2021</Date>
                <Desc>
                  Alhamdulillah, semalam telah berlangsung Majlis Pelancaran
                  Rumah IKRAM Keluarga Malaysia yang disempurnakan oleh YAB
                  Dato’ Sri Ismail Sabri Yaakob, Perdana Menteri di Dewan
                  Kristal KPKT.{"\n"}
                  {"\n"}
                  Program ini juga disiarkan secara langsung di Laman Facebook
                  saya dan KPKT Malaysia. Terima kasih diucapkan kepada YAB
                  Perdana Menteri di ata kesudian melancarkan serta
                  menyempurnakan simbolik penyerahan kunci kepada 5 penerima
                  secara fizikal dan 100 penerima secara virtual melalui
                  aplikasi zoom.{"\n"}
                  {"\n"}
                  Semasa ucapan beliau, YAB Perdana Menteri telah mengumumkan, 3
                  inisiatif tambahan iaitu: Pertama, penambahan 1,000 unit Rumah
                  IKRAM Keluarga Malaysia menjadikan jumlah sebanyak 2,000 unit.
                  {"\n"}
                  {"\n"}
                  Kedua, pengecualian bayaran kepada penerima manfaat Rumah
                  IKRAM Keluarga Malaysia selama 6 bulan dari tarikh menerima
                  kunci.{"\n"}
                  {"\n"}
                  Ketiga, melanjutkan program moratorium bayaran sewa kepada
                  penghuni PPR sedia ada di bawah pengurusan KPKT sehingga akhir
                  tahun 2022.{"\n"}
                  {"\n"}
                  Saya dan pasukan KPKT amat berterima kasih di atas
                  keprihatinan YAB Perdana Menteri. Ini merupakan satu bukti
                  bahawa kesejahteraan Keluarga Malaysia sentiasa menjadi fokus
                  utama kerajaan. {"\n"}
                  {"\n"}
                  Tahniah diucapkan kepada penerima Rumah IKRAM Keluarga
                  Malaysia. Saya dan pasukan KPKT berharap, inisiatif ini akan
                  dapat mengurangkan kesulitan yang dialami ketika ini.{"\n"}
                  {"\n"}
                  Ini Keluarga kita.{"\n"}
                  Keluarga Malaysia kita. {"\n"}
                  {"\n"}
                  #KeluargaMalaysia{"\n"}
                  #BekerjaBersamaRakyat{"\n"}
                  #KeluargaKPKT{"\n"}
                  {"\n"}
                  <strong>
                    YB DATO' SRI REEZAL MERICAN NAINA MERICAN
                    {"\n"}
                    MENTERI PERUMAHAN DAN KERAJAAN TEMPATAN
                  </strong>
                </Desc>
              </TextWrapper>
            </Paper>
          </Posts>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
}

export default Post2;
