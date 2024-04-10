'use client'
import Image from 'next/image';
import styles from './trackOrderInput.module.scss';
import { ChangeEvent, useState } from 'react';
import BaseButton from '../baseButton/BaseButton';
import { useRouter } from 'next/navigation';

interface Translation {
	[key: string]: string;
}

interface Props {
  t: Translation,
}
const TrackOrderInput: React.FC<Props> = ({ t }) => {
  const router = useRouter()

  const [shipNum, setShipNum] = useState<string>()
  
  const navigate = ()=>{
    router.push(`/${shipNum}`)
  }
  const onChange = (e : ChangeEvent<HTMLInputElement>)=>{
    setShipNum(e.target.value);
  }
	return (
		<div className={styles.wrapper}>
      <input type='text' placeholder={t['track_no']} value={shipNum} onChange={onChange}/>
      <BaseButton text={t['start_track']} onClick={navigate} disabled={!shipNum}/>
    </div>
	);
};

export default TrackOrderInput;