import { useState } from 'react';
import styles from '../styles/navigation.module.css';
import logo from '../assets/final-header-logo.webp';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";


export const Navbar = () => {
    const [showNav, setShowNav] = useState('-100%')

    const toggleNav = () => {
        let value = showNav === '-100%' ? '0' : '-100%';
        setShowNav(value)
    }

    return (
        <nav className={styles.NavBar}>
            <div className={styles.content + ' widthControl'}>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.fullBar}>
                    <ul className={styles.listBox}>
                        <NavLinks />
                    </ul>
                </div>
                <div className={styles.hiddenBar} >
                    <GiHamburgerMenu className={styles.GiHamburgerMenu} onClick={toggleNav} />
                    <ul className={styles.listBox} style={{ right: showNav }}>
                        <FaArrowRight className={styles.FaArrowRight} onClick={toggleNav} />
                        <NavLinks />
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export const NavLinks = () => {
    return (
        <>
            <li className={styles.item}>About Us</li>
            <li className={styles.item}>Accomodation</li>
            <li className={styles.item}>Gallery</li>
            <li className={styles.item}>Retreats</li>
            <li className={styles.item}>Gallery</li>
            <li className={styles.item}>Blog</li>
            <li className={styles.item}>Contact Us</li>

        </>
    )
}
