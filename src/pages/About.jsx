import React, { useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ProfilePhoto from "../img/profile.png";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 1064px;
  max-width: 100%;

  height: 100vh;

  margin: 30px auto;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    rgba(44, 73, 100, 0),
    rgba(44, 73, 100, 0),
    rgba(44, 73, 100, 0.25),
    rgba(44, 73, 100, 0.5),
    rgba(44, 73, 100, 0.75),
    rgba(44, 73, 100, 1)
  );

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  content: "";
  height: 600px;
  width: 500px;
  background: url(${ProfilePhoto}) center center;
  background-size: cover;

  @media (max-width: 960px) {
    height: 55vh;
  }
`;

const TextWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 30px;
`;

const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: #37517e;
  text-align: center;
  border-bottom: 7px solid #d43076;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Text = styled.p`
  white-space: pre-line;
  text-align: justify;
`;

const About = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <div>
            <Document
              file="https://www.kpkt.gov.my/kpkt/resources/user_1/media_akhbar/2021/SM_PENJELASAN_KPKT_HBA_BINGUNG_JUMLAH_PROJEK_RUMAH_TERBENGKALAI_TAK_SAMA.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
