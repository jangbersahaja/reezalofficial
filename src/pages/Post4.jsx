import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import PostImg from "../img/homepage/article4.jpg";
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

function Post4() {
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
              KPKT akan membawa agenda Liveable Malaysia atau Malaysia Berdaya
              Huni sebagai Fokus Utama
            </SectionTitle>
          </TitleWrapper>
        </Hero>
        <Wrapper>
          <Posts>
            <Paper>
              <TextWrapper>
                <Category>Statement</Category>
                <Date>30 Sep 2021</Date>
                <Desc>
                  Pembentangan Rancangan Malaysia Kedua Belas (RMKe-12) oleh YAB
                  Perdana Menteri pada Isnin lalu merupakan satu hala tuju
                  nasional yang komprehensif sehingga 2025. {"\n"} {"\n"}Saya
                  meneliti satu persatu apa yang dibentangkan dan ia sememangnya
                  menuntut collective responsibility daripada semua pihak —
                  Anggota Pentadbiran, penjawat awam, pemimpin masyarakat,
                  pemain industri, komuniti setempat, organisasi sivil hinggalah
                  ke unit terkecil, setiap seorang rakyat dan Keluarga Malaysia.
                  {"\n"} {"\n"}
                  Saya dan pasukan KPKT faham, dalam keadaan kita masih
                  berhadapan dengan pandemik COVID-19 serta persediaan ke arah
                  fasa endemik, banyak usaha perlukan fine-tuning dan
                  disesuaikan dengan keperluan semasa. KPKT mahu rawat keresahan
                  rakyat, KPKT mahu sama-sama bina keyakinan rakyat.{"\n"}{" "}
                  {"\n"} Hal perumahan terus menjadi keutamaan begitu juga
                  dengan lima lagi fokus KPKT dalam RMKe-12 ini. {"\n"} {"\n"}
                  Banyak yang ingin kami laksanakan bersama-sama rakyat, untuk
                  rakyat, untuk Keluarga Malaysia.{"\n"} {"\n"} Apa yang kurang,
                  kita tambah.{"\n"} Apa yang sakit, kita rawat.{"\n"} Apa yang
                  kurang baik, kita perelokkan.{"\n"} Kita akan laksanakan yang
                  terbaik dalam agenda Liveable Malaysia atau Malaysia Yang
                  Berdaya Huni. Insya Allah.{"\n"}
                  {"\n"} #KeluargaMalaysia
                  {"\n"}#BekerjaBersamaRakyat{"\n"} #KeluargaKPKT
                  {"\n"} {"\n"}
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

export default Post4;
