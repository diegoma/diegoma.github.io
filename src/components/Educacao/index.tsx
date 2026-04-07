import type { EducacaoData } from '../../types';
import CaixaEducacao from '../CaixaEducacao';
import CaixaConteudo from '../CaixaConteudo';
import Secao from '../Secao';

interface Props {
  educacao: EducacaoData;
}

const Educacao = ({ educacao }: Props) => (
  <Secao>
    <header className="text-right">
      <h3 className="section-title">{educacao.title}</h3>
    </header>
    <ul className="flex flex-wrap gap-[15px_10px]">
      {educacao.cursos.map((curso, index) => (
        <li key={`curso__${index}`}>
          <CaixaEducacao blockType={index % 2} curso={curso} />
        </li>
      ))}
      <li>
        <CaixaConteudo blockType={educacao.cursos.length % 2}>
          <div>
            <header className="mb-5">
              <h4 className="text-[18px]">{educacao.idiomas.titulo}</h4>
            </header>
            <ul className="flex flex-wrap">
              {educacao.idiomas.linguas.map((lingua, index) => (
                <li key={`idioma__${index}`} className="w-1/2">
                  <h6>{lingua.titulo}</h6>
                  <p>{lingua.nivel}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <header className="mb-5">
              <h4 className="text-[18px]">{educacao.cursosAvulsos.titulo}</h4>
            </header>
            <p>{educacao.cursosAvulsos.cursos}</p>
          </div>
        </CaixaConteudo>
      </li>
    </ul>
  </Secao>
);

export default Educacao;
