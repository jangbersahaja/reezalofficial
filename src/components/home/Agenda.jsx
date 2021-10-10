import React from "react";
import styled from "styled-components";
import PostImg1 from "../../img/home/about1.jpg";
import PostImg2 from "../../img/home/about2.jpg";
import PostImg3 from "../../img/home/about3.jpg";

const Container = styled.div`
  background: linear-gradient(180deg, #f2f6f9 0%, #fff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1064px;
  max-width: 100%;
  padding: 30px 0;
`;

const SectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: #37517e;
  text-align: center;
  border-bottom: 7px solid #d43076;
`;

const AboutPosts = styled.div``;

const AboutPost = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  padding: 30px;
  height: 450px;
  @media (max-width: 960px) {
    flex-direction: column;
    min-height: 110vh;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ImgWrapper = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  @media (max-width: 992px) {
    max-width: 600px;
    flex: 1;
  }
`;

const PostImg = styled.img`
  height: 100%;
  object-fit: cover;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const PostTextWrapper = styled.div`
  margin: 20px;
  flex: 1;
  ${(props) => props.margin};
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  padding: 0 0 20px 0;
  @media (max-width: 992px) {
    margin: -50px 0 0 0;
    max-width: 600px;
    flex: 1;
  }
`;

const PostTitle = styled.h2`
  margin-bottom: 10px;
  font-family: "Playfair Display", serif;
  padding: 20px;
  line-height: 1.2;
  font-weight: 600;
  color: #fff;
  background-color: #2c4964;
`;

const PostText = styled.p`
  text-align: justify;
  white-space: pre-line;
  padding: 0 20px;
  font-size: 1rem;
`;

const LineBreak = styled.hr`
  margin: 5px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

const Agenda = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <SectionTitle>Agenda KPKT</SectionTitle>
          <AboutPosts>
            <AboutPost>
              <ImgWrapper>
                <PostImg src={PostImg1} />
              </ImgWrapper>
              <PostTextWrapper margin="margin-left: -50px">
                <PostTitle>
                  Merawat keresahan rakyat pasca COVID-19. Kita mahu bantu
                  mereka yang terkesan akibat COVID-19 ini.
                </PostTitle>
                <PostText>
                  Kita sedar, di luar sana, ramai rakyat yang terkesan &ndash;
                  dari aspek ekonomi, sosial mahupun psikologi. Dan menjadi
                  tugas serta tanggungjawab kita adalah untuk bina keyakinan
                  rakyat. {"\n"} {"\n"}
                  <em>We must instill and build hopes</em> kepada rakyat. Kita
                  mahu rakyat lihat, rakyat rasa dan rakyat dapat pegang
                  keyakinan itu dalam bulan-bulan mendatang ini. &nbsp;
                  Keyakinan yang bagaimana? Kita mahu rakyat rasa selamat.
                  {"\n"} {"\n"}
                  <em>
                    They feel safe and we build safe environment for everyone.
                  </em>
                </PostText>
              </PostTextWrapper>
            </AboutPost>
            <LineBreak />
            <AboutPost direction="row-reverse">
              <ImgWrapper>
                <PostImg src={PostImg2} />
              </ImgWrapper>
              <PostTextWrapper margin="margin-right: -50px">
                <PostTitle>
                  Bersama-sama dalam agenda merancakkan ekonomi atau revival of
                  economy.
                </PostTitle>
                <PostText>
                  Kita beri tumpuan membantu membangkitkan semula perniagaan
                  kecil yang terhenti, kita<em> facilitate</em> mereka yang
                  kehilangan kerja.
                  {"\n"} {"\n"}
                  Saya mohon supaya diperhebat program-program berbentuk
                  keusahawanan, dipermudahkan urusan permohonan dan kelulusan
                  untuk memulakan perniagaan. Ekonomi komuniti perlu selamat.
                  {"\n"} {"\n"}
                  Penjaja dan Peniaga ini merupakan sebahagian daripada
                  <em> Economy Frontliners</em>.
                </PostText>
              </PostTextWrapper>
            </AboutPost>

            <LineBreak />
            <AboutPost>
              <ImgWrapper>
                <PostImg src={PostImg3} />
              </ImgWrapper>
              <PostTextWrapper margin="margin-left: -50px">
                <PostTitle>Gagasan Keluarga Malaysia.</PostTitle>
                <PostText>
                  Ini penting sebagai asas untuk kita bergerak sebagai satu
                  pasukan Malaysia yang kuat, sebagai negara Malaysia yang kuat
                  dan sebagai sebuah Keluarga Malaysia yang berpadu.
                  {"\n"} {"\n"}
                  Saya lihat gagasan Keluarga Malaysia ini memberi nilai dan
                  mesej yang cukup kuat kepada kita. Dalam semangat keluarga,
                  banyak perkara boleh kita bincang, banyak perkara boleh kita
                  bahaskan, banyak perkara kita boleh jadikan simbol kekuatan
                  kita.
                  {"\n"} {"\n"}
                  <em>This is back to basic message. </em> Apa pun kita lakukan,
                  setinggi mana pun kita ingin gapai, we will definitely turn
                  and look back to our fundamental unit of life iaitu Keluarga.
                </PostText>
              </PostTextWrapper>
            </AboutPost>
          </AboutPosts>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Agenda;
