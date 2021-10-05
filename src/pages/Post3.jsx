import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import PostImg from "../img/homepage/article3.jpg";
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

function Post3() {
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
              Menerapkan Konsep Keluarga Dalam Politik, Perangi Pandemik
            </SectionTitle>
          </TitleWrapper>
        </Hero>
        <Wrapper>
          <Posts>
            <Paper>
              <TextWrapper>
                <Category>In The News</Category>
                <Date>26 Aug 2021</Date>
                <Desc>
                  <em>
                    - Bingkisan akhbar Berita Harian pada hari ini, 26 Ogos
                    2021.
                  </em>
                  {"\n"}
                  {"\n"}
                  Situasi dan suasana politik sebelum pelantikan Perdana Menteri
                  kesembilan membuatkan saya selalu teringat akan untaian ucapan
                  lama mantan Perdana Menteri, Almarhum Tun Abdul Razak Hussein
                  kepada semua ahli Parlimen Perikatan sekitar 1972.
                  {"\n"}
                  {"\n"}
                  Frasa 'kesedaran hakikat' (new realism) selalu diungkap Abdul
                  Razak pasca-peristiwa 13 Mei 1969 dan usaha awal pembentukan
                  Majlis Gerakan Negara (MAGERAN). Pesan beliau, andai boleh
                  saya ringkaskan - "Mana-mana parti atau mana-mana kerjasama
                  politik mesti mempunyai kesedaran hakikat, tidak bersandarkan
                  kepada kekuatan dan keangkuhan lama."
                  {"\n"}
                  {"\n"}
                  Berteraskan prinsip inilah seluruh kekuatan struktur politik
                  mesti dihalakan ke arah membina kesepakatan luar biasa. Titah
                  ingatan Yang di-Pertuan Agong Al-Sultan Abdullah Ri'ayatuddin
                  Al-Mustafa Billah Shah bahawa 'yang menang tidak menang semua,
                  manakala yang kalah tidak pula kalah semua' wajar difahami
                  melalui aspek ini.
                  {"\n"}
                  {"\n"}
                  Dinamik perbincangan dalam suasana 'kekeluargaan' membolehkan
                  setiap isu dan masalah diselesaikan dengan baik dan berkesan.
                  Tidak ada istilah mustahil apabila sesuatu masalah dan isu
                  dibawakan kepada ruang keluarga.
                  {"\n"}
                  {"\n"}
                  Tawaran disebutkan dalam ucapan sulung Perdana Menteri ialah
                  sesuatu yang ikhlas dan jujur. Kita semua, kalangan ahli
                  Parlimen, sudah pun memberi janji dan iltizam langsung kepada
                  Seri Paduka untuk membenih persekitaran politik serba baharu.
                  {"\n"}
                  {"\n"}
                  Rakyat mengimpikan binaan dan kerangka politik tidak terlalu
                  terpisah atas dasar ideologi. Dalam kita berhadapan cabaran
                  pandemik COVID-19, kita memerlukan kerangka politik
                  sebenar-benarnya bersifat 'nasional' dan rentas kepartian.
                  {"\n"}
                  {"\n"}
                  Tidak ada salahnya, andai semangat 'kekeluargaan' ini turut
                  diterjemah dalam merealisasi beberapa keputusan dan strategi
                  penting sewaktu sidang Parlimen nanti. Kita berjeda sekejap
                  daripada politik totok kepartian.
                  {"\n"}
                  {"\n"}
                  Barangkali ini manfaat benar-benar diingini sekalian rakyat.
                  Pandemik COVID-19 dilihat melalui perspektif 'kekeluargaan'
                  akan pastinya menginsafkan. Jumlah kes keseluruhan yang
                  mencecah lebih 1.5 juta dan jumlah kes kematian menghampiri
                  angka 15,000 - seharusnya memberikan kesedaran.
                  {"\n"}
                  {"\n"}
                  Jutaan keluarga berhadapan pelbagai kesukaran. Ribuan anak
                  kecil menjadi yatim piatu kerana COVID-19. Entah berapa lagi
                  jumlah yang kehilangan pekerjaan dan punca pendapatan. Tanpa
                  perspektif 'keluarga,' apa kesan langsungnya kepada kita?
                  {"\n"}
                  {"\n"}
                  Faham dan amalan politik berteraskan semangat 'Keluarga
                  Malaysia' mesti menjadi model baharu dalam masa terdekat.
                  Pendekatan 'kembali kepada asas' perlu terus mendahului
                  kepentingan rakyat.
                  {"\n"}
                  {"\n"}
                  Terus terang, majoriti rakyat cukup lega dengan keupayaan
                  pimpinan parti politik membuat buntelan keputusan untuk
                  menamakan Datuk Seri Ismail Sabri Yaakob sebagai Perdana
                  Menteri kesembilan.
                  {"\n"}
                  {"\n"}
                  Mengangkat dan menjulang semula kehormatan politik tidak
                  semestinya berasaskan kesumat dendam dan arus kesombongan. Bak
                  kata Abdul Razak, fahami dan hayatilah makna 'kesedaran
                  hakikat.'
                  {"\n"}
                  {"\n"}
                  Percayalah, sebarang beza pandangan, khilaf tanggapan yang ada
                  mampu kita selesaikan dalam semangat kerjasama politik luhur
                  dan asli. Bersangka baiklah sesama pemimpin parti. Muafakat
                  rundingan, wajar menjadi wasilah untuk menyusun semula
                  kekuatan dan kewibawaan keluarga politik.
                  {"\n"}
                  {"\n"}
                  Jangan mencipta kesumat - atas landasan kekalahan dan
                  kerisauan peribadi. Setuju, parti lebih besar daripada
                  mana-mana individu. Gunalah sifir sama untuk melihat kelemahan
                  dan kekhilafan diri sendiri.
                  {"\n"}
                  {"\n"}
                  "Dan jika mereka condong kepada perdamaian, maka condonglah
                  kepadanya dan bertawakallah kepada Allah. Sesungguhnya Dialah
                  Yang Maha Mendengar lagi Maha Mengetahui." (Surah al-Anfal:
                  61)
                  {"\n"}
                  {"\n"}
                  Kerangka politik wajar menjadi ruang memuliakan persahabatan
                  dan kerjasama. Tidak meninggalkan sahabat ketika susah. Tidak
                  mensabotaj watan kerana hati menjadi rentan. Tidak menghina
                  dan memperkecilkan peranan yang boleh diisi teman di denai
                  politik berlainan.
                  {"\n"}
                  {"\n"}
                  Aturan Allah SWT ini seharusnya mengajar kita untuk lebih
                  berhemah, bertawaduk dan rendah diri dengan kuasa. Wang dan
                  harta bukan segala-galanya. Dalam politik, akhlak dan peribadi
                  mulia jua yang menjadi akar tunjangnya.
                  {"\n"}
                  {"\n"}
                  Kekuatan 'kerjasama politik' mesti dibina segera kerana kita
                  tidak punya banyak masa. Kita tidak boleh lagi cempala mulut,
                  mengulangi permainan 'politik persepsi' dengan menyindir dan
                  mencemuh kerajaan kerana dendam politik. Hari ini, kita perlu
                  bersama memandu adicita negara.
                  {"\n"}
                  {"\n"}
                  Tempoh mendatang ini mesti diisi dengan abstraksi demokrasi
                  positif dan mengubat luka politik yang dalam. Rakyat
                  menginginkan parameter politik lebih terbuka, lebih baharu dan
                  mendahulukan kepentingan mereka. Ucapan awal Perdana Menteri
                  sudah membuka denai siasah dimaksudkan.
                  {"\n"}
                  {"\n"}
                  Ini masa paling sesuai kita membuktikan diri sebagai pengamal
                  politik matang. Kita tidak wajar mengaci-aci diri sebagai
                  demokrat tulen, pendokong kedaulatan dan keabsahan
                  Perlembagaan - andai menolak jalur perdamaian cuba dihulurkan.
                  {"\n"}
                  {"\n"}
                  Ini masa dan waktu paling wajar, untuk kita memberikan
                  seluas-luas 'harapan' kepada rakyat. Sesungguhnya tidak ada
                  absolutisme dalam politik. Yang ada dan wajar diperkukuh ialah
                  fikrah persahabatan dan keikhlasan menyelesaikan keresahan dan
                  kegusaran rakyat terbanyak.
                  {"\n"}
                  {"\n"}
                  Selari dengan nawaitu 'keluarga besar Malaysia,' kita semua
                  ada tanggungjawab untuk membuka landskap politik serba baharu
                  dan positif. Apa sahaja kesempatan ada, wajar digunakan untuk
                  merangka polisi serta dasar memenuhi impian dan keinginan
                  rakyat.{"\n"}
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

export default Post3;
