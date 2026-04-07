/// <reference types="vite/client" />

declare module '*.svg' {
  import type { SVGProps, FC } from 'react';
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
