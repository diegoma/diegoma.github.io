import type { MenuItem } from '../../types';

interface Props {
  menuItems: MenuItem[];
  isOpen: boolean;
  onOpen: () => void;
}

const Menu = ({ menuItems, isOpen, onOpen }: Props) => (
  <>
    {/* Mobile: hamburger button */}
    <button
      onClick={onOpen}
      className="sm:hidden bg-transparent border-0 cursor-pointer p-0 text-primary text-2xl leading-none"
      aria-label="Abrir menu"
      aria-expanded={isOpen}
    >
      ☰
    </button>

    {/* Desktop: horizontal nav */}
    <nav className="hidden sm:block">
      <ul className="flex flex-row gap-[30px]">
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
  </>
);

export default Menu;
