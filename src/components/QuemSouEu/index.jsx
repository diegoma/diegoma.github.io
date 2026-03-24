import styled from "styled-components";
import RedesSociais from "../RedesSociais";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

const ImagemPerfil = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  z-index: 10;
  filter: ${({ theme }) => theme.imgPerfilFilter };
  transition: 0.3s;

  &:hover { 
    filter: none;
  }
`;

const ImagemPerfilLines = styled.span`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const ImageWrapper = styled.div`
  height: 250px;
  width: 250px;
  text-align: right;
  position: relative;
  margin: 20px auto 20px auto;
`;


const ImagemPerfilWrapper = function(props) {
  return (
    <ImageWrapper>
      <ImagemPerfilLines style={{ left: "12px", top: "12px" }}></ImagemPerfilLines>
      <ImagemPerfilLines style={{ left: "-19px", top: "-7px" }}></ImagemPerfilLines>
      <ImagemPerfilLines style={{ left: "12px", top: "-7px" }}></ImagemPerfilLines>
      <ImagemPerfilLines style={{ left: "-8px", top: "0px" }}></ImagemPerfilLines>
      <ImagemPerfil src={props.quemSouEuImg.src} alt={props.quemSouEuImg.alt}></ImagemPerfil>
    </ImageWrapper> 
  );
}

const QuemSouEu = function(props) {
  const titleStyle = {
    marginBottom: "20px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "32px"
  };

  const contentStyle = {  
    marginBottom: "15px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "16px",
    textAlign: "justify"
  };

  return (
    <Container fluid style={{ marginTop: "60px", marginBottom: "60px" }}>
      <Row>
        <Col sm={{ span: 10, offset: 1 }}  md={{ span: 12, offset: 0 }} xl={{ span: 5, offset: 2 }}>       
            <h1 style={titleStyle}>{props.quemSouEu.title}</h1>
            {
              props.quemSouEu.content.map((result, index) => (
                <p style={contentStyle} key={`${index}`}>
                  {result}
                </p>
              ))
            }
            <RedesSociais redesSociais={props.redesSociais}></RedesSociais>
        </Col> 
        <Col sm={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} xl={{ span: 3 }}>
          <ImagemPerfilWrapper quemSouEuImg={props.quemSouEu.image}></ImagemPerfilWrapper>
        </Col>
      </Row>
    </Container>
  );
}

export default QuemSouEu;
