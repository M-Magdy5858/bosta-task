
import React from 'react';
import styles from './shipmentTrack.module.scss';
import { formatDateDetailed, formatDateSimple } from '@/utils/formatDate';
import images from '@/assets/images';
import Step from '../step/Step';

interface Translation {
	[key: string]: string;
}

interface Props {
	shipmentDetails: any;
	t: Translation;
	lang: string;
}
const statusColors = {
	DELIVERED_TO_SENDER: '#F9BA02',
	DELIVERED: '#36b600',
	CANCELLED: '#e30613',
};

const ShipmentTrack: React.FC<Props> = ({ shipmentDetails, t, lang }) => {
	console.log({ shipmentDetails });
	const status = shipmentDetails.CurrentStatus.state;
	const statusColor = statusColors[status as keyof typeof statusColors];
	return (
		<div className={styles.container}>
			<div className={styles.dataList}>
				<div className={styles.dataItem}>
					<p className={styles.label}>
						{t['shipment_num']} {shipmentDetails.TrackingNumber}
					</p>
					<p className={styles.data} style={{ color: statusColor }}>
						{t.shipment_states[shipmentDetails.CurrentStatus.state]}
					</p>
				</div>

				<div className={styles.dataItem}>
					<p className={styles.label}>{t['last_update']} </p>
					<p className={styles.data}>{formatDateDetailed(shipmentDetails.CurrentStatus.timestamp, lang)}</p>
				</div>

				<div className={styles.dataItem}>
					<p className={styles.label}>{t['merchant_name']}</p>
					<p className={styles.data}>{shipmentDetails.provider}</p>
				</div>

				<div className={styles.dataItem}>
					<p className={styles.label}>{t['deliver_date']}</p>
					<p className={styles.data}>{formatDateSimple(shipmentDetails.PromisedDate, lang)}</p>
				</div>
			</div>

			<div className={styles.steps}>
				<Step text={t['shipment_created']} color={statusColor} />

				<Step text={t['shipment_recieved_merchant']} color={statusColor} />
				<Step
					text={t['shipment_out_delivery']}
					color={statusColor}
					showIcon={status !== 'DELIVERED'}
					icon={images.truckIcon}
				/>
				<Step
					text={t['shipment_delivered']}
					color={status == 'DELIVERED' ? statusColor : '#cfcfcf'}
					showIcon={status !== 'DELIVERED'}
					icon={images.packageIcon}
				/>
			</div>

		</div>
	);
};

export default ShipmentTrack;
