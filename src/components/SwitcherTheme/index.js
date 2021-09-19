import ThemeOn from "/icon/assets/images/themeOn.svg";
import ThemeOff from "/icon/themeOff.svg";
import { Icone } from "../UI";

const bright = <Icone src={ThemeOn} alt="Bright Theme" />;
const dark = <Icone src={ThemeOff} alt="Dark Theme" />;

export default ({ theme }) => (theme ? dark : bright);
