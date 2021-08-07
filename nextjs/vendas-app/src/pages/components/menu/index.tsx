import Link from 'next/link'

export const Menu: React.FC = () =>{
    return(
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">
                Minhas Vendas
            </p>
            <ul>
                <MenuItem href="/" label="Home" />
                <MenuItem href="/" label="Cadastros" />
                <MenuItem href="/" label="Vendas" />
            </ul>

        </aside>
    )
}

interface MenuItemProps{
    href: string;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
    return (
        <li>
            <Link href={props.href}>
                <a>
                    <span className="icon"></span> { props.label }
                </a>
            </Link>
        </li>
    )
}