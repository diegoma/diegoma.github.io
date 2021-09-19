import { Grid, Cell } from "styled-css-grid";
import db from '../db.json';
import SiteBackground from '../src/components/SiteBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Menu from '../src/components/Menu';
import QuemSouEu from '../src/components/QuemSouEu';
import Experiencia from '../src/components/Experiencia';
import Educacao from '../src/components/Educacao';
import Carreira from '../src/components/Carreira';
import Footer from '../src/components/Footer';
import Separador from '../src/components/Separador';

export default function Home() {
  return (
    <SiteBackground>
      <span id="quemSouEu"></span>
      <GitHubCorner projectUrl="https://github.com/diegoma/diegoma.github.io" />

      <Grid style={{ width: '100%' }}>
        <Cell left={2} width={10}>
          <Menu menuItems={db.menuItems}></Menu>
        </Cell>

        <Cell left={3} width={8}>        
          <QuemSouEu quemSouEu={db.quemSouEu} redesSociais={db.redesSociais}></QuemSouEu>
        </Cell>

        <Cell width={12}>
          <Separador></Separador>
        </Cell>

        <Cell left={2} width={10}>
          <span id="experiencia"></span>
          <Experiencia experiencia={db.experiencia} habilidades={db.habilidades}></Experiencia>
        </Cell>

        <Cell left={2} width={10}>
          <span id="educacao"></span>
          <Educacao educacao={db.educacao}></Educacao>
        </Cell>

        <Cell left={2} width={10}>
          <span id="carreira"></span>
          <Carreira carreira={db.carreira}></Carreira>
        </Cell>

        <Cell width={12}>
          <Separador></Separador>
        </Cell>

        <Cell width={12}>
          <Footer></Footer>
        </Cell>
      </Grid>
    </SiteBackground>
  )
}
