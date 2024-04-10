import React from 'react';
import styles from './baseButton.module.scss';

interface Props {
	text: string;
	onClick?: () => any;
	primary?: boolean;
	disabled?: boolean;
}
const BaseButton: React.FC<Props> = ({ text, onClick, primary = true, disabled = false }) => {
	return (
		<button onClick={onClick} className={`${styles.btn} ${primary ? styles.primary : ''}`} disabled={disabled}>
			{text}
		</button>
	);
};

export default BaseButton;
