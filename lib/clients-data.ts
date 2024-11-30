import { StaticImageData } from 'next/image';
import alta from '@/public/images/clients/alta.svg';
import antidote from '@/public/images/clients/antidote.svg';
import everafter from '@/public/images/clients/everafter.svg';
import groundcover from '@/public/images/clients/groundcover.svg';
import port from '@/public/images/clients/port.svg';
import permit from '@/public/images/clients/permit.svg';
import lin from '@/public/images/clients/lin.svg';
import obol from '@/public/images/clients/obol.svg';

export type Client = {
	name: string;
	logo: StaticImageData;
	fullUrl: string;
};

export const data: Client[] = [
	{ name: 'Alta', logo: alta, fullUrl: 'https://www.altahq.com/' },
	{ name: 'Antidote', logo: antidote, fullUrl: 'https://www.antidotehealth.com/' },
	{ name: 'Everafter', logo: everafter, fullUrl: 'https://www.everafter.ai/' },
	{ name: 'Groundcover', logo: groundcover, fullUrl: 'https://www.groundcover.com/' },
	{ name: 'Port', logo: port, fullUrl: 'https://www.getport.io/' },
	{ name: 'Permit', logo: permit, fullUrl: 'https://www.permit.io/' },
	{ name: 'Lin', logo: lin, fullUrl: 'https://www.lin.health/' },
	{ name: 'Obol', logo: obol, fullUrl: 'https://www.obol.app/' },
];
