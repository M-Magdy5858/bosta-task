import React from 'react';
import styles from './shipmentDetailsTable.module.scss';
import { formatDateDDMMYYYY, formatDateTime } from '@/utils/formatDate';

interface Translation {
	[key: string]: string;
}
interface ShipmentDetail {
	state: any;
	timestamp: string;
	hub?: string;
	exceptionCode?: string;
	reason?: string;
}
interface Props {
  t: Translation,
  details: ShipmentDetail[]
}

const ShipmentDetailsTable: React.FC<Props> = ({ details, t }) => {
	return (
		<div className={styles.tableWrapper}>
			<div className={styles.tableHeader}>
				<p className={styles.headerCell}>{t['branch']}</p>
				<p className={styles.headerCell}>{t['date']}</p>
				<p className={styles.headerCell}>{t['time']}</p>
				<p className={styles.headerCell}>{t['details']}</p>
			</div>

			{details?.map((data, i) => (
				<div className={styles.tableRow} key={i}>
					<p className={styles.rowCell}>{data.hub ?? '-'}</p>
					<p className={styles.rowCell}>{formatDateDDMMYYYY(data.timestamp)}</p>
					<p className={styles.rowCell}>{formatDateTime(data.timestamp)}</p>
					<p className={styles.rowCell}>{t.shipment_detail_states[data.state]}</p>
				</div>
			))}
		</div>
	);
};

export default ShipmentDetailsTable;
