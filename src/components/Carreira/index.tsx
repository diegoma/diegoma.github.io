import type { CarreiraData } from '../../types';
import Secao from '../Secao';

interface Props {
  carreira: CarreiraData;
}

const Carreira = ({ carreira }: Props) => (
  <Secao className="mb-10">
    <header className="text-left">
      <h3 className="section-title">{carreira.title}</h3>
    </header>
    <ul className="inline-block">
      {carreira.empregos.map((emprego, index) => (
        <li key={`emprego__${index}`} className={index > 0 ? 'mt-10' : ''}>
          <header className="flex justify-between items-baseline border-b border-primary mb-[15px] py-[5px]">
            <h4 className="text-base">{emprego.titulo}</h4>
            <span>{emprego.periodo}</span>
          </header>
          <h5 className="mb-[15px]">{emprego.cargo}</h5>
          {emprego.conteudo.map((text, idx) => (
            <p
              key={`conteudo__${idx}`}
              className={`whitespace-pre-wrap text-base text-justify${idx > 0 ? ' mt-[15px]' : ''}`}
            >
              {text}
            </p>
          ))}
          <h6 className="mt-[10px] mb-[10px] font-bold">Atividades</h6>
          <ul className="list-disc list-inside">
            {emprego.atividades.map((atividade, idx) => (
              <li key={`atividade__${idx}`} className="whitespace-pre-wrap mb-[5px]">
                {atividade}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </Secao>
);

export default Carreira;
