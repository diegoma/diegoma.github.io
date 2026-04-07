import CaixaConteudo from '../CaixaConteudo';
import type { Curso } from '../../types';

interface Props {
  blockType: number;
  curso: Curso;
}

const CaixaEducacao = ({ blockType, curso }: Props) => (
  <CaixaConteudo blockType={blockType}>
    <header className="flex justify-between mb-5">
      <span className="inline-block text-sm">{curso.instituicao}</span>
      <span className="inline-block text-sm">{curso.ano}</span>
    </header>
    <h4 className="text-[18px] text-left mb-[5px]">{curso.titulo}</h4>
    <p className="whitespace-pre-wrap">{curso.conteudo}</p>
  </CaixaConteudo>
);

export default CaixaEducacao;
