import './globals.css';
import Script from 'next/script';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import { Children } from '@/types/children';
import { general_sans } from '@/components/layout/fonts';
import BackgroundAnimation from '@/components/ui/background-animation';

const SITE_URL = 'https://cv.panker.dev';

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
	metadataBase: new URL(SITE_URL),
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
		url: SITE_URL,
		siteName: 'panker.dev',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Harel Panker | Frontend Developer',
		description:
			'Expert frontend developer specializing in React, Next.js, and modern web technologies. Creating responsive, performant, and user-friendly web applications.',
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
				<Script
					defer
					src='https://cloud.umami.is/script.js'
					data-website-id='129c37f3-cf33-4ad9-92f8-4bec31f06b9c'
					strategy='afterInteractive'
				/>
				<Navbar />
				<div className='relative z-20'>{children}</div>
				<BackgroundAnimation />
			</body>
		</html>
	);
}
