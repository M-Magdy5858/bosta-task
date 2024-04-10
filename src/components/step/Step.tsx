import React from 'react';
import styles from './step.module.scss';
import CheckIcon from '@/assets/images/CheckIcon';
import IconWrapper from '../iconWrapper/IconWrapper';

interface Props {
	text: string;
	color: string;
	showIcon?: boolean;
  icon?: string;
}

const Step: React.FC<Props> = ({ text, color, showIcon = false, icon }) => {
	return (
		<div className={`${styles.step}`}>
			<div className={styles.stepTrack}>
				<div className={`${styles.icon} ${showIcon ? styles.largeIcon : ''}`}>
					{showIcon ? <IconWrapper icon={icon ?? ""} color={color} /> : <CheckIcon color={color} />}
				</div>
				<div className={styles.line} style={{ backgroundColor: color }}></div>
			</div>
			<p>{text}</p>
		</div>
	);
};

export default Step;
