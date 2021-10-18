import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Post1 from "../img/home/kepalabatas-bg.jpg";

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
    url(${Post1}) center center;
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

const Desc = styled.p`
  text-align: justify;
  white-space: pre-line;
  margin: 30px 0;
`;

function KepalaBatas() {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero>
          <TitleWrapper>
            <SectionTitle>Kepala Batas Di Hatiku</SectionTitle>
          </TitleWrapper>
        </Hero>
        <Wrapper>
          <Posts>
            <Paper>
              <TextWrapper>
                <Desc>
                  Kepala Batas merupakan sebuah bandar dan Kompleks Pejabat
                  Kerajaan bagi daerah Seberang Perai Utara, Pulau Pinang,
                  Malaysia. Ia terletak di tengah perjalanan Butterworth
                  ke Sungai Petani, terletak 30 km dari George Town. Kepala
                  batas juga membawa maksud bahagian depan batas sawah padi.
                  Batas ialah pemisah antara tanah pesawah-pesawah padi. Wakil
                  Rakyat di Kepala Batas ialah bekas Perdana Menteri Malaysia,
                  Abdullah Ahmad Badawi, sebagai tempat desanya. Kepala Batas
                  juga sangat berdekatan dengan Tasek Gelugor, Penaga dan Bukit
                  Mertajam. Stesen Keretapi Tasik Gelugor sekarang juga
                  merupakan satu lagi stesen alternatif untuk melancong ke
                  Selatan bagi penduduk sini. Bandar ini dengan Pulau Pinang
                  juga merupakan bandar seperti Kuala Lumpur dan Gombak di Pulau
                  Pinang.
                  <br/><br/>
                  'Kepala Batas' bermaksud bahagian depan sawah padi. Batas
                  ialah pemisah antara tanah pesawah-pesawah padi . Biasanya
                  batas ini dibuat daripada tanah sebagai benteng penahan air
                  agar paras air dalam sawah tidak terlalu banyak. Jika paras
                  air di dalam sawah lebih daripada sejengkal, padi agak susah
                  ditanam . Anak padi akan tenggelam, terutama jika selepas
                  hujan lebat. Batas air di dalam sawah perlu dikawal sepanjang
                  masa. Sebagai kawasan persisiran pantai, kawasan ini pada masa
                  dahulu mempunyai saliran yang buruk dan sering dilanda banjir.
                  Dengan itu tidak sesuai untuk tanaman kecuali padi yang tumbuh
                  di dalam air. Oleh itu pembinaan saliran adalah satu langkah
                  untuk pemulihan atau tebusguna tanah. Banyak kawasan di Kedah
                  dan Pulau Pinang melalui proses ini. Sungai Korok di Kedah
                  maupun di Pulau Pinang adalah pelat buruh dari Jawa yang
                  menyebut "korok" walhal di Kedah lebih tepat dipanggil Sungai
                  Korek. Di tebing Sungai Korek ini biasanya ada timbunan tanah
                  dari parit sebagai benteng untuk mengelak kemasukan air masin.
                  Timbunan tanah sepanjang parit korek ini dipanggil batas atau
                  bund dalam bahasa Inggeris. Hujung bund ini di mana parit
                  berakhir atau bertembung dengan parit lain dipanggil kepala
                  batas. Oleh itu kita boleh dapati beberapa tempat di Kedah dan
                  Perlis mempunyai nama yang sama iaitu Kepala Batas.
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

export default KepalaBatas;
