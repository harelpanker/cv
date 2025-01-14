import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import { Children } from '@/types/children';
import { general_sans } from '@/components/layout/fonts';
import BackgroundAnimation from '@/components/ui/background-animation';

export const metadata: Metadata = {
	title: 'Harel Panker | Frontend Developer',
	description:
		'Expert frontend developer specializing in React, Next.js, and modern web technologies. Creating responsive, performant, and user-friendly web applications.',
	generator: 'Next.js',
	applicationName: 'Next.js',
	referrer: 'origin-when-cross-origin',
	creator: 'Harel Panker',
	keywords: [
		'Harel Panker',
		'Frontend Developer',
		'React Developer',
		'JavaScript Expert',
		'Next.js Developer',
		'CSS Specialist',
		'Webflow Developer',
		'Webstudio Expert',
		'Web Development',
		'UI Development',
	],
	metadataBase: new URL('https://www.panker.dev/'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
		},
	},
	openGraph: {
		type: 'website',
		title: 'Harel Panker | Frontend Developer',
		description:
			'Expert frontend developer specializing in React, Next.js, and modern web technologies. Creating responsive, performant, and user-friendly web applications.',
		url: 'https://www.panker.dev',
		siteName: 'panker.dev',
		locale: 'en_US',
		// images: [
		// 	{
		// 		url: 'https://cdn.prod.website-files.com/666c7f094ef448a50760aaec/67701d421d4895759ea04b84_opengraph-image.png',
		// 		width: 1200,
		// 		height: 630,
		// 		alt: 'Harel Panker | Frontend Developer',
		// 	},
		// ],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Harel Panker | Frontend Developer',
		description:
			'Expert frontend developer specializing in React, Next.js, and modern web technologies. Creating responsive, performant, and user-friendly web applications.',
		// images: [
		// 	'https://cdn.prod.website-files.com/666c7f094ef448a50760aaec/67701d421d4895759ea04b84_opengraph-image.png',
		// ],
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({ children }: Readonly<Children>) {
	return (
		<html lang='en' dir='ltr' className={`${general_sans.variable} scroll-smooth`}>
			<body className='min-h-dvh bg-background font-general_sans text-foreground antialiased'>
				<Navbar />
				<div className='relative z-20'>{children}</div>
				<BackgroundAnimation />
			</body>
		</html>
	);
}
