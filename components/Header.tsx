import style from "@/styles/Header.module.scss"
import Link from "next/link";
import { useRouter } from 'next/router';

const Header = function(){
    const router = useRouter();

    return (
    <div className={style.header + ` w-full `}>
        <div className={style.title}>
            <h1>{title}</h1>
        </div>
        <nav className={style.navbar}>
            {menus.map((menu)=> (
                <Link href={menu.link} key={menu.title} className={router.pathname == menu.link ? style.active : ""}>
                    <span>{menu.title}</span>
                </Link>
            ))}
        </nav>
    </div>
    )
}

const title = "Minhyeok.me"
const menus: {title: string; link: string }[] = [
    { title: "Home", link: "/"},
    { title: "About", link: "/about"},
    { title: "Posts", link: "/post"},
];

export default Header;
