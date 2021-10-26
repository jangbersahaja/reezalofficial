import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { ArrowBack, HomeOutlined } from "@material-ui/icons";

import Footer from "../Footer";
import Navbar from "../Navbar";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Hero = styled.div`
  background: linear-gradient(0deg, #ffffff, rgba(255, 255, 255, 0.534)),
    url(${require("../../img/home/rumah-ikram.jpg")}) top center;
  background-size: cover;
  height: 80vh;

  @media (max-width: 992px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  margin: -30vh auto 0 auto;

  width: 1064px;
  max-width: 100%;
  padding: 30px 0;

  @media (max-width: 992px) {
    width: 100%;
    margin: auto;
  }
`;

const SectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;

  color: #37517e;
  text-align: center;
  border-bottom: 7px solid #d43076;

  @media (max-width: 992px) {
    margin: 50px 0 0 0;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Item = styled.div`
  margin: 20px;
`;

const ItemImg = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ItemImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 240px;
  height: 160px;

  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 280px;
    margin-top: 5px;
  }
`;

const Title = styled.h2`
  margin: 20px 0;
`;

const Desc = styled.p`
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;
`;

const Detail = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;

  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: center;
`;

const Location = styled.div`
  display: flex;

  align-items: center;
`;

const Span = styled.span`
  margin: 0 15px 0 5px;
  font-size: 12px;
`;

const Card = styled.div`
  display: flex;

  margin: 30px 0;
  width: 500px;
  max-width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;

const CardImg = styled.div`
  height: 100px;
  margin: 20px;

  overflow: hidden;
`;

const Image = styled.img`
  object-fit: cover;
  margin: auto;
  height: 100%;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

const BackBtn = styled(Link)`
  position: fixed;
  top: 10vh;
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

  @media (max-width: 768px) {
    top: 82vh;
    left: 77vw;
  }
`;

const HomeBtn = styled(Link)`
  position: fixed;
  top: 10vh;
  left: 11vh;
  z-index: 99;
  background: #d43076;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    top: 82vh;
    left: 88vw;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ArrowBackIcon = styled(ArrowBack)`
  color: #fff;
`;

const HomeIcon = styled(HomeOutlined)`
  color: #fff;
`;

const RumahIkram = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <BackBtn to="/">
          <ArrowBackIcon />
        </BackBtn>
        <HomeBtn to="/">
          <HomeIcon />
        </HomeBtn>
        <Hero></Hero>
        <Wrapper>
          <SectionTitle>Rumah IKRAM Keluarga Malaysia</SectionTitle>
          <Item>
            <Title>Pengenalan</Title>
            <Desc>
              Inisiatif Rumah Kediaman Keluarga Malaysia atau Rumah IKRAM
              Keluarga Malaysia ini bukanlah pembinaan rumaih baharu, sebaliknya
              merupakan inisiatif bersifat nilai tambah terhadap unit PPR sedia
              ada buat Keluarga Malaysia yang terkesan akibat pandemik COVID-19
              sehingga kehilangan tempat berteduh disebabkan merosotnya
              pendapatan, kehilangan pekerjaan dan lain-lain kesusahan.
              <br />
              <br />
              Permulaan ini, Rumah Ikram Keluarga Malaysia merupakan unit-unit
              PPR di bawah kawal selia dan pengurusan KPKT. Pihak-pihak Berkuasa
              Negeri juga telah dirunding supaya dapat turut serta dalam
              inisiatif ini di PPR bawah kawal selia masing-masing.
              <br />
              <br />
              Sebanyak 2,000 unit sewaan Rumah Ikram Keluarga Malaysia
              ditawarkan selama 2 tahun pada kadar yang paling minima iaitu
              RM124 dengan insentif pengecualian sewaan selama 6 bulan oleh
              Kerajaan bagi membantu mengurangkan beban kewangan yang ditanggung
              oleh penerima manfaat.
              <br />
              <br />
              Inisiatif ini dirangka secara bersasar dengan tumpuan kepada
              golongan B40 yang terjejas pendapatan akibat COVID-19 dan layak
              mendapat manfaat dari program ini.
              <br />
              <br />
              Insya Allah, kita bukan sahaja akan memastikan mereka yang
              terjejas ini mempunyai rumah untuk berteduh tetapi menikmati
              sedikit keselesaan bersama keluarga.
            </Desc>
          </Item>
          <LineBreak />
          <Item>
            <Title>Syarat Permohonan</Title>
            <Desc>
              <ol>
                <li>Pemohon dan pasangan warganegara Malaysia;</li>
                <li>Pemohon berumur 18 tahun dan ke atas;</li>
                <li>
                  Tidak memiliki rumah, tempoh sewaan ditamatkan oleh tuan rumah
                  atau seumpamanya; dan
                </li>
                <li>Pendapatan isi rumah tidak melebihi RM3,000.00 sebulan.</li>
              </ol>
            </Desc>
          </Item>
          <LineBreak />

          <Card>
            <CardImg>
              <a
                href="https://teduh.kpkt.gov.my/scheme/rumah-ikram-keluarga-malaysia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={require("../../img/home/logo-ikram.png")} />
              </a>
            </CardImg>
            <CardText>
              <a
                href="https://teduh.kpkt.gov.my/scheme/rumah-ikram-keluarga-malaysia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Title>Pautan Permohonan</Title>
                <Span>https://teduh.kpkt.gov.my/</Span>
              </a>
            </CardText>
          </Card>

          <LineBreak />
          <Item>
            <Title>Pelancaran Rumah IKRAM KPKT oleh YAB Perdana Menteri</Title>

            <Detail>
              <Date>
                <EventIcon />
                <Span>24 Sep 2021</Span>
              </Date>
              <Location>
                <LocationOnIcon />
                <Span>Kementerian Perumahan dan Kerajaan Tempatan</Span>
              </Location>
            </Detail>
            <ItemImg>
              <ItemImgWrapper>
                <Image src={require("../../img/home/rumah-ikram.jpg")} />
              </ItemImgWrapper>

              <ItemImgWrapper>
                <Image src={require("../../img/home/rumah-ikram2.jpg")} />
              </ItemImgWrapper>

              <ItemImgWrapper>
                <Image src={require("../../img/home/rumah-ikram3.jpg")} />
              </ItemImgWrapper>

              <ItemImgWrapper>
                <Image src={require("../../img/home/rumah-ikram4.jpg")} />
              </ItemImgWrapper>
            </ItemImg>
            <Desc>
              Alhamdulillah, semalam telah berlangsung Majlis Pelancaran Rumah
              IKRAM Keluarga Malaysia yang disempurnakan oleh YAB Dato’ Sri
              Ismail Sabri Yaakob, Perdana Menteri di Dewan Kristal KPKT.
              Program ini juga disiarkan secara langsung di Laman Facebook saya
              dan KPKT Malaysia.
              <br />
              <br />
              Terima kasih diucapkan kepada YAB Perdana Menteri di ata kesudian
              melancarkan serta menyempurnakan simbolik penyerahan kunci kepada
              5 penerima secara fizikal dan 100 penerima secara virtual melalui
              aplikasi zoom.
              <br />
              <br />
              Semasa ucapan beliau, YAB Perdana Menteri telah mengumumkan, 3
              inisiatif tambahan iaitu:
              <br />
              <br />
              Pertama, penambahan 1,000 unit Rumah IKRAM Keluarga Malaysia
              menjadikan jumlah sebanyak 2,000 unit.
              <br />
              <br />
              Kedua, pengecualian bayaran kepada penerima manfaat Rumah IKRAM
              Keluarga Malaysia selama 6 bulan dari tarikh menerima kunci.
              <br />
              <br />
              Ketiga, melanjutkan program moratorium bayaran sewa kepada
              penghuni PPR sedia ada di bawah pengurusan KPKT sehingga akhir
              tahun 2022.
              <br />
              <br />
              Saya dan pasukan KPKT amat berterima kasih di atas keprihatinan
              YAB Perdana Menteri. Ini merupakan satu bukti bahawa kesejahteraan
              Keluarga Malaysia sentiasa menjadi fokus utama kerajaan. Tahniah
              diucapkan kepada penerima Rumah IKRAM Keluarga Malaysia.
              <br />
              <br />
              Saya dan pasukan KPKT berharap, inisiatif ini akan dapat
              mengurangkan kesulitan yang dialami ketika ini.
              <br />
              <br />
              Ini Keluarga kita.
              <br />
              Keluarga Malaysia kita.
            </Desc>
          </Item>
          <LineBreak />
          <Item>
            <Title>
              Walkabout dan Penyerahan kepada penerima Rumah IKRAM Keluarga
              Malaysia di PPR Lembang Subang 2
            </Title>
            <Detail>
              <Date>
                <EventIcon />
                <Span>5 Oct 2021</Span>
              </Date>
              <Location>
                <LocationOnIcon />
                <Span>PPR Lembah Subang 2</Span>
              </Location>
            </Detail>
            <ItemImg>
              <ItemImgWrapper>
                <Image src={require("../../img/home/lembahsubang1.jpg")} />
              </ItemImgWrapper>

              <ItemImgWrapper>
                <Image src={require("../../img/home/lembahsubang2.jpg")} />
              </ItemImgWrapper>

              <ItemImgWrapper>
                <Image src={require("../../img/home/lembahsubang3.jpg")} />
              </ItemImgWrapper>

              <ItemImgWrapper>
                <Image src={require("../../img/home/lembahsubang4.jpg")} />
              </ItemImgWrapper>
            </ItemImg>
            <Desc>
              Alhamdulillah, saya lafazkan syukur, tidak sampai 14 hari selepas
              YAB Perdana Menteri melancarkan Inisiatif Kediaman Rumah Keluarga
              Malaysia atau Rumah Ikram Keluarga Malaysia pada 24 September 2021
              lalu, pada hari ini, kita dapat memastikan 105 orang kumpulan
              pertama penerima mula masuk ke kediaman masing-masing.
              <br />
              <br />
              Pada hari ini, saya berbesar hati menyampaikan surat tawaran
              secara rasmi kepada 9 orang penerima manfaat Rumah Ikram Keluarga
              Malaysia di PPR Lembah Subang 2. Kumpulan Kedua penerima manfaat
              Rumah Ikram ini akan mula diberi kunci secara berperingkat pada 15
              Oktober 2021 dan kumpulan seterusnya pada awal November nanti.
              <br />
              <br />
              Insya Allah, PPR Lembah Subang 2 ini akan menempatkan 50 buah unit
              Rumah Ikram yang akan memanfaatkan kira-kira 250 orang
              keseluruhannya.
              <br />
              <br />
            </Desc>
          </Item>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default RumahIkram;
