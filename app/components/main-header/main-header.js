'use client';

import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "@/app/components/main-header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";

export default function MainHeader() {

    const path = usePathname();
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
                            <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Visit Meals</Link>
                        </li>
                        <li>
                            <Link href="/community" className={path.startsWith('/community') ? classes.active : undefined}>Visit Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}