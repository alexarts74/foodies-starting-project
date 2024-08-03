import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "@/app/components/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
    return (
        <>
        <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="logo" priority />
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Visit Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Visit Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
