import ThemeOn from '../../assets/svg/themeOn.svg';
import ThemeOff from '../../assets/svg/themeOff.svg';

interface Props {
  theme: boolean;
}

const SwitcherTheme = ({ theme }: Props) =>
  theme
    ? <ThemeOn style={{ height: '25px', width: '25px' }} />
    : <ThemeOff style={{ height: '25px', width: '25px' }} fill="#8B949E" />;

export default SwitcherTheme;
