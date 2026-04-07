import type { ReactNode } from 'react';

interface Props {
  blockType: number;
  children: ReactNode;
  className?: string;
}

const CaixaConteudo = ({ blockType, children, className = '' }: Props) => (
  <div
    className={`
      py-5 px-[15px] box-border border border-primary
      shadow-[0px_2px_4px_0px_rgba(0,0,0,0.4)] h-auto w-full
      lg:p-[10px] lg:h-[350px] lg:w-[350px]
      [&_p]:text-sm
      ${blockType === 0 ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}
      ${className}
    `}
  >
    {children}
  </div>
);

export default CaixaConteudo;
