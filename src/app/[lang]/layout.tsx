import type { Metadata } from 'next';
import '@/styles/globals.scss';
import Navbar from '@/components/navbar/Navbar';
import { getDictionary } from './dictionaries';

interface RootLayoutProps {
	children: React.ReactNode;
	params: {
		lang: string;
	};
}

export const metadata: Metadata = {
	title: 'Fastest Courier & Shipping Services | Bosta Egypt',
	description:
		"Explore Bosta's local courier services in Egypt & enjoy real-time tracking & customization for your business needs. Ship now with a trusted shipping company!",
};

export default async function RootLayout({ children, params:{lang} }: Readonly<RootLayoutProps>) {
	const t = await getDictionary(lang);

  return (
		<html lang={lang} dir={lang == "ar" ? "rtl" : "ltr"}>
			<body>
				<Navbar lang={lang} t={t}/>
				{children}
			</body>
		</html>
	);
}
