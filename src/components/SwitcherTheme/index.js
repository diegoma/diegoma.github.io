import ThemeOn from "../../assets/svg/themeOn.svg";
import ThemeOff from "../../assets/svg/themeOff.svg";

const iconStyle = {
    "height": "25px",
    "width": "25px"
};

const SwitcherTheme = ({ theme }) => (theme ? <ThemeOn style={iconStyle} /> : <ThemeOff style={iconStyle} fill="#8B949E" />);

export default SwitcherTheme;
