import React from "react";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { API_GetShipmentDetails } from "@/network/shipment";
import { notFound } from "next/navigation";
import ShipmentTrack from "@/components/shipmentTrack/ShipmentTrack";
import styles from "./page.module.scss"
import ShipmentDetailsTable from "@/components/shipmentDetailsTable/ShipmentDetailsTable";
import ReportProblem from "@/components/reportProblem/ReportProblem";
interface Props {
  params: {
    lang: string;
    id: string;
  };
  searchParams: any; // Assuming searchParams is of any type
}


const Page: React.FC<Props> = async ({ params: { lang, id }, searchParams }) =>{
  const shipmentData = await API_GetShipmentDetails(id)
  const t = await getDictionary(lang);
  
  if(shipmentData.status == 'Not Found.'){
    notFound()
  }

  return (
    <main className={styles.main}>
      <ShipmentTrack shipmentDetails={shipmentData} t={t} lang={lang}/>

      <section className={styles.details}>
				<div className={styles.table}>
					<h4>{t['shipment_details']}</h4>
					<ShipmentDetailsTable details={shipmentData.TransitEvents} t={t}/>
				</div>

        <div className={styles.info}>
          <h4>{t['address']}</h4>
          {/* Mock address */}
          <p className={styles.address}>
            {'امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22'}
          </p>
          <ReportProblem t={t}/>
        </div>
			</section>

    </main>
  );
}

export default Page