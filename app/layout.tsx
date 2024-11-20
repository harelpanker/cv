import './globals.css';
import type { Metadata } from 'next';
import { Children } from '@/types/children';
import styles from '@/styles/layout.module.css';
import { general_sans } from '@/components/layout/fonts';

export const metadata: Metadata = {
	title: 'Harel Panker | CV',
	description: 'An expert front end web developer',
};

export default function RootLayout({ children }: Readonly<Children>) {
	return (
		<html lang='en' dir='ltr' className={`${general_sans.variable}`}>
			<body className={styles.body}>{children}</body>
		</html>
	);
}