'use client';
import React, { useState } from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import images from '@/assets/images';
import LangButton from '../langButton/LangButton';
import BurgerMenuIcon from '../burgerMenuIcon/BurgerMenuIcon';

interface Translation {
	[key: string]: string;
}

interface Props {
	lang: string;
	t: Translation;
}
const Navbar: React.FC<Props> = ({ lang, t }) => {
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

	return (
		<nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href={''}>
          <Image src={lang === 'ar' ? images.logoAr : images.logoEn} alt="logo" />
        </Link>

        <div className={`${styles.linksWrapper} ${isMenuOpened ? styles.dropDown : ''}`}>
          <div className={styles.linkGroup}>
            <Link href={''}>{t['home']}</Link>
            <Link href={''}>{t['prices']}</Link>
            <Link href={''}>{t['talk_sales']}</Link>
          </div>

          <div className={styles.linkGroup}>
            <Link href={''}>{t['track_shipment']}</Link>
            <Link href={''}>{t['login']}</Link>
            <LangButton t={t} />
          </div>
        </div>

        <BurgerMenuIcon isOpened={isMenuOpened} onClick={() => setIsMenuOpened((prev) => !prev)} />
      </div>
		</nav>
	);
};

export default Navbar;
