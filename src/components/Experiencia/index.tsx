import type { ExperienciaData, Habilidade } from '../../types';
import Habilidades from '../Habilidades';
import Secao from '../Secao';

interface Props {
  experiencia: ExperienciaData;
  habilidades: Habilidade[];
}

const Experiencia = ({ experiencia, habilidades }: Props) => (
  <Secao>
    <header className="text-left">
      <h3 className="section-title">{experiencia.title}</h3>
    </header>
    {experiencia.content.map((text, index) => (
      <p
        key={`exp__${index}`}
        className={`text-base text-justify${index > 0 ? ' mt-[15px]' : ''}`}
      >
        {text}
      </p>
    ))}
    <Habilidades habilidades={habilidades} />
  </Secao>
);

export default Experiencia;
