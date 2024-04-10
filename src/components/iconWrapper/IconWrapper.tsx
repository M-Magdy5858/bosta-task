import React from "react";
import Image from "next/image";
import styles from './iconWrapper.module.scss'
import images from "@/assets/images";

interface Props {
  color: string,
  icon: string
} 
const TruckIcon : React.FC<Props> = ({color, icon }) => {
	return (
		<div className={styles.iconWrapper} style={{backgroundColor:color}}>
      <Image src={icon} alt="icon" />
    </div>
	);
};

export default TruckIcon