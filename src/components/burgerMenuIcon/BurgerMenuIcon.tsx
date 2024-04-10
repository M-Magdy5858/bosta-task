import React from 'react';
import styles from './burgerMenuIcon.module.scss';

interface Props {
	isOpened: boolean;
	onClick: () => void;
}
const BurgerMenuIcon: React.FC<Props> = ({ isOpened, onClick }) => {
	return (
		<div className={styles.container}>
			<div className={`${styles.menuToggle} ${isOpened ? styles.opened : null}`} onClick={onClick}>
				<span className={`${styles.menuToggleBar} ${styles.tobBar}`}></span>
				<span className={`${styles.menuToggleBar} ${styles.middleBar}`}></span>
				<span className={`${styles.menuToggleBar} ${styles.BottomBar}`}></span>
			</div>
		</div>
	);
};

export default BurgerMenuIcon;
