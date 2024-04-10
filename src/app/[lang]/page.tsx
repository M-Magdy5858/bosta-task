import Image from 'next/image';
import styles from './page.module.scss';
import { getDictionary } from './dictionaries';
import TrackOrderInput from '@/components/trackOrderInput/TrackOrderInput';

interface Props {
	params: {
		lang: string;
	};
}
const Page: React.FC<Props> = async ({ params: { lang } }) => {
	const t = await getDictionary(lang);

	return (
		<main className={styles.main}>
      <h1>{t['track_order']}</h1>
			<TrackOrderInput t={t} />
		</main>
	);
};

export default Page;
