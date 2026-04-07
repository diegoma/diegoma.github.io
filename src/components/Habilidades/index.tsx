import type { Habilidade } from '../../types';

interface Props {
  habilidades: Habilidade[];
}

const Habilidades = ({ habilidades }: Props) => (
  <ul className="mt-[15px] flex flex-wrap gap-[5px_6px]">
    {habilidades.map((item, index) => (
      <li key={`skill__${index}`}>
        <span className="inline-block text-xs text-primary border border-primary rounded px-2 py-1">
          {item.title}
        </span>
      </li>
    ))}
  </ul>
);

export default Habilidades;
