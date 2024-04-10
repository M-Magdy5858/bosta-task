import React from 'react'
import styles from './reportProblem.module.scss'
import Image from 'next/image'
import images from '@/assets/images'
import BaseButton from '../baseButton/BaseButton'

interface Translation {
	[key: string]: string;
}

interface Props {
  t: Translation
}
const ReportProblem : React.FC<Props> = ({t}) => {

  return (
    <div className={styles.wrapper}>
      <Image src={images.questionIcon} alt='proplem icon'/>
      <div>
        <p>{t['shipment_problem']}</p>
        <BaseButton text={t['report_problem']} primary/>
      </div>
    </div>
  )
}

export default ReportProblem