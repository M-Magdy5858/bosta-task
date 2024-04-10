'use client';
import React from 'react';
import styles from './langButton.module.scss';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const LangButton: React.FC<any> = ({ t }) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

  const getLocaleUrl = (pathname: string) => {
		const urlArray = pathname.split('/');
		let locale = 'en';
		if (urlArray[1] == 'ar') {
			urlArray.splice(1, 1, 'en');
			locale = 'en';
		} else {
			urlArray.splice(1, 1, 'ar');
			locale = 'ar';
		}

		return { url: urlArray.join('/'), locale };
	};

	const changeLocale = () => {
		const link = getLocaleUrl(pathname);
		document.cookie = `NEXT_LOCALE=${link.locale}; max-age=31536000; path=/`;
		router.push(link.url + `?${searchParams.toString()}`);
	};

	return <button onClick={changeLocale} className={styles.langBtn}>{t['lang']}</button>;
};

export default LangButton;
