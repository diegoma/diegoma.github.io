import styled from 'styled-components'
import { Grid, Cell } from "styled-css-grid";
import db from '../db.json';
import SiteBackground from '../src/components/SiteBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Menu from '../src/components/Menu'
import QuemSouEu from '../src/components/QuemSouEu'
import Footer from '../src/components/Footer'
import Separador from '../src/components/Separador';

export default function Home() {
  return (
    <SiteBackground>
      <GitHubCorner projectUrl="https://github.com/diegoma/diegoma.github.io" />

      <Grid style={{ width: '100%' }}>
        <Cell left={2} width={10}>
          <Menu menuItems={db.menuItems}></Menu>
        </Cell>

        <Cell left={3} width={8}>
          <QuemSouEu quemSouEu={db.quemSouEu} redesSociais={db.redesSociais}></QuemSouEu>
          <Separador></Separador>
        </Cell>

        <Cell left={2} width={10}>
          {/* Experiência */}
        </Cell>

        <Cell left={2} width={10}>
          {/* Educação */}
        </Cell>

        <Cell left={2} width={10}>
          {/* Carreira */}
        </Cell>

        <Cell width={12}>
          <Separador></Separador>
          <Footer></Footer>
        </Cell>
      </Grid>
    </SiteBackground>
  )
}
