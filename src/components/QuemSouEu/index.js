import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";
import RedesSociais from "../RedesSociais";

const ImagemPerfil = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  z-index: 10;
`;

const ImagemPerfilLines = styled.span`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const ImagemPerfilWrapper = function(props) {
  const imageWrapper = {
    height: "250px",
    width: "250px",
    textAlign: "right",
    position: "relative",
    margin: "20px auto 20px auto"
  };

  return (
    <div style={imageWrapper}>
      <ImagemPerfilLines style={{ left: "12px", top: "12px" }}></ImagemPerfilLines>
      <ImagemPerfilLines style={{ left: "-19px", top: "-7px" }}></ImagemPerfilLines>
      <ImagemPerfilLines style={{ left: "12px", top: "-7px" }}></ImagemPerfilLines>
      <ImagemPerfilLines style={{ left: "-8px", top: "0px" }}></ImagemPerfilLines>
      <ImagemPerfil src={props.quemSouEuImg.src} alt={props.quemSouEuImg.alt}></ImagemPerfil>
    </div> 
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
    <Grid style={{ marginTop: "60px", marginBottom: "60px" }} columns={8} columns="repeat(auto-fit, minmax(50px, 1fr))">
      <Cell width={5} middle>       
          <h1 style={titleStyle}>{props.quemSouEu.title}</h1>
          {
            props.quemSouEu.content.map((result, index) => (
              <p style={contentStyle} key={`${index}`}>
                {result}
              </p>
            ))
          }
          <RedesSociais redesSociais={props.redesSociais}></RedesSociais>
      </Cell> 
      <Cell width={3}>
        <ImagemPerfilWrapper quemSouEuImg={props.quemSouEu.image}></ImagemPerfilWrapper>
      </Cell>
    </Grid>
  );
}

export default QuemSouEu;
