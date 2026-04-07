import type { MenuItem } from '../../types';

interface Props {
  menuItems: MenuItem[];
}

const Menu = ({ menuItems }: Props) => (
  <nav className="pt-20 w-full">
    <ul className="flex flex-col gap-[7.5px] sm:flex-row sm:gap-[30px]">
      {menuItems.map((item, index) => (
        <li key={`menu__${index}`}>
          <a
            href={item.link}
            className="nav-link pt-[2px] pb-[2px] no-underline text-primary hover:text-primary active:text-primary visited:text-primary focus:text-primary"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
