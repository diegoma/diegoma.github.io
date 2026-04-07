import type { QuemSouEuData, SocialLink } from '../../types';
import RedesSociais from '../RedesSociais';

interface ImagemPerfilWrapperProps {
  src: string;
  alt: string;
}

const ImagemPerfilWrapper = ({ src, alt }: ImagemPerfilWrapperProps) => (
  <div className="h-[250px] w-[250px] text-right relative my-5 mx-auto">
    <span aria-hidden="true" className="absolute h-full w-full rounded-full border border-primary" style={{ left: '12px', top: '12px' }} />
    <span aria-hidden="true" className="absolute h-full w-full rounded-full border border-primary" style={{ left: '-19px', top: '-7px' }} />
    <span aria-hidden="true" className="absolute h-full w-full rounded-full border border-primary" style={{ left: '12px', top: '-7px' }} />
    <span aria-hidden="true" className="absolute h-full w-full rounded-full border border-primary" style={{ left: '-8px', top: '0px' }} />
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="block h-full w-full rounded-full border border-primary relative z-10 grayscale hover:grayscale-0 transition-all duration-300"
    />
  </div>
);

interface Props {
  quemSouEu: QuemSouEuData;
  redesSociais: SocialLink[];
  isDark: boolean;
}

const QuemSouEu = ({ quemSouEu, redesSociais, isDark }: Props) => (
  <div className="my-[60px]">
    <div className="flex flex-col xl:flex-row">
      <div className="w-full xl:w-5/12 xl:ml-[16.67%] px-4 xl:px-0">
        <h1 className="mb-5 text-[32px]">{quemSouEu.title}</h1>
        {quemSouEu.content.map((text, index) => (
          <p key={`bio__${index}`} className={`text-base text-justify${index > 0 ? ' mt-[15px]' : ''}`}>
            {text}
          </p>
        ))}
        <RedesSociais redesSociais={redesSociais} isDark={isDark} />
      </div>
      <div className="w-full xl:w-3/12">
        <ImagemPerfilWrapper src={quemSouEu.image.src} alt={quemSouEu.image.alt} />
      </div>
    </div>
  </div>
);

export default QuemSouEu;
