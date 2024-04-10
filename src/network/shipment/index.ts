import { baseUrl } from '../baseUrl';
import { endpoints } from '../endpoints';

export const API_GetShipmentDetails = async (shipID: string): Promise<any> => {
	const LINK: string = baseUrl.prod + endpoints.getShipmentDetails + shipID;
	try {
		const response = await fetch(LINK, { cache: 'no-cache' });
		let data = await response.text();
		const parsedResponse = JSON.parse(data);
		return parsedResponse;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};
