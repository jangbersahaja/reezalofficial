import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import BlogHero from "../img/blog-hero.jpg";
import PostImg1 from "../img/homepage/article1.jpg";
import PostImg2 from "../img/homepage/article-pm.jpg";
import PostImg3 from "../img/homepage/article3.jpg";
import PostImg4 from "../img/homepage/article4.jpg";

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
    url(${BlogHero}) center right;
  background-size: cover;
  height: 100vh;
  color: #fff;

  @media (max-width: 992px) {
    height: 70vh;
  }
`;

const TitleWrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1064px;
  max-width: 100%;

  margin: -50vh auto 0 auto;
  padding: 30px 0;

  @media (max-width: 992px) {
    width: 100%;
    margin: -20vh auto 0 auto;
  }
`;

const SectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 60px;
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

const Post = styled.div`
  display: flex;
  margin: 15px;

  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    flex-direction: column;
    min-height: 700px;
  }
`;

const ImgWrapper = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  height: 350px;
  width: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  flex: 3;
  padding: 30px;
  overflow: hidden;

  @media (max-width: 992px) {
    min-height: 200px;
    flex: auto;
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

const Title = styled.h2`
  margin: 20px 0;
`;

const Desc = styled.p`
  text-align: justify;
  white-space: pre-line;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;



function Blog() {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero>
          <TitleWrapper>
            <SectionTitle>Blog</SectionTitle>
          </TitleWrapper>
        </Hero>
        <Wrapper>
          <Posts>
          <Link to="/post4">
              <Post>
                <ImgWrapper>
                  <Image src={PostImg4} />
                </ImgWrapper>
                <TextWrapper>
                  <Category>Statement</Category>
                  <Date>30 Sep 2021</Date>
                  <Title>
                    KPKT akan membawa agenda Liveable Malaysia atau Malaysia Berdaya Huni sebagai Fokus Utama
                  </Title>
                  <Desc>
                  Pembentangan Rancangan Malaysia Kedua Belas (RMKe-12) oleh YAB Perdana Menteri pada Isnin lalu merupakan satu hala tuju nasional yang komprehensif sehingga 2025. Saya meneliti satu persatu apa yang dibentangkan dan ia sememangnya menuntut collective responsibility daripada semua pihak — Anggota Pentadbiran, penjawat awam, pemimpin masyarakat, pemain industri, komuniti setempat, organisasi sivil hinggalah ke unit terkecil, setiap seorang rakyat dan Keluarga Malaysia. 
                  </Desc>
                </TextWrapper>
              </Post>
            </Link>
            <Link to="/post2">
              <Post>
                <ImgWrapper>
                  <Image src={PostImg2} />
                </ImgWrapper>
                <TextWrapper>
                  <Category>Though</Category>
                  <Date>25 Sep 2021</Date>
                  <Title>
                  Terima Kasih Yab PM. Pengecualian Sewa 6 Bulan Kepada Penerima Manfaat 2,000 Unit Rumah Ikram Keluarga Malaysia
                  </Title>
                  <Desc>
                  Alhamdulillah, semalam telah berlangsung Majlis Pelancaran
                  Rumah IKRAM Keluarga Malaysia yang disempurnakan oleh YAB
                  Dato’ Sri Ismail Sabri Yaakob, Perdana Menteri di Dewan
                  Kristal KPKT.{"\n"}
                  {"\n"}
                  </Desc>
                </TextWrapper>
              </Post>
            </Link>
            <Link to="/post">
              <Post>
                <ImgWrapper>
                  <Image src={PostImg1} />
                </ImgWrapper>
                <TextWrapper>
                  <Category>Though</Category>
                  <Date>15 Sep 2021</Date>
                  <Title>
                    Merawat Keresahan Rakyat Dalam Keadaan Kita Berhadapan
                    Dengan Kesan Pasca Pandemik COVID-19
                  </Title>
                  <Desc>
                    Dalam merawat keresahan itu juga, saya tekankan bahawa kita
                    mahu bina keyakinan rakyat dan kita mahu rakyat rasa
                    selamat. They must feel safe.
                    {"\n"} {"\n"}
                    Kerana pada ketika ini, rakyat mahu lihat action and
                    results. Apa tindakan kita dan apa hasilnya. {"\n"} {"\n"}Ini semua
                    merupakan sebahagian daripada prime agenda atau agenda utama
                    saya serta pasukan KPKT iaitu{" "}
                  </Desc>
                </TextWrapper>
              </Post>
            </Link>
            
            <Link to="/post3">
              <Post>
                <ImgWrapper>
                  <Image src={PostImg3} />
                </ImgWrapper>
                <TextWrapper>
                  <Category>In The News</Category>
                  <Date>26 Aug 2021</Date>
                  <Title>
                    Menerapkan Konsep Keluarga Dalam Politik, Perangi Pandemik
                  </Title>
                  <Desc>
                    Situasi dan suasana politik sebelum pelantikan YAB Perdana
                    Menteri Malaysia ke-9 membuatkan saya selalu teringat akan
                    untaian ucapan lama Almarhum Tun Abdul Razak kepada semua
                    ahli Parlimen Parti Perikatan sekitar tahun 1972.
                  </Desc>
                </TextWrapper>
              </Post>
            </Link>
          </Posts>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
}

export default Blog;
