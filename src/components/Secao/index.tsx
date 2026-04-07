import type { ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Secao = ({ children, className = '', style }: Props) => (
  <div className={`mt-10 ${className}`} style={style}>
    {children}
  </div>
);

export default Secao;
