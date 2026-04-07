import type { SocialLink } from '../../types';

interface Props {
  redesSociais: SocialLink[];
  isDark: boolean;
}

const RedesSociais = ({ redesSociais, isDark }: Props) => {
  const themeName = isDark ? 'dark' : 'bright';
  return (
    <ul className="flex gap-[14px] mt-[15px]">
      {redesSociais.map((item, index) => (
        <li key={`social__${index}`}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              src={item.icon.replace('$theme', themeName)}
              alt={item.title}
              className="w-6 h-6"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RedesSociais;
