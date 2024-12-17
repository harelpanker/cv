'use client';

import { useState, useEffect } from 'react';
import CVLayout from '@/components/home-page/CVLayout';
import { Text } from '@/components/ui/text';
import { EvervaultCard } from '@/components/ui/evervault-card';
import { data } from '@/lib/education-data';

export default function Education() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [trigger, setTrigger] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setTrigger((prev) => !prev);
		}, 1000);
		const interval2 = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
		}, 2000);

		return () => {
			clearInterval(interval);
			clearInterval(interval2);
		};
	}, []);

	return (
		<CVLayout title='Knowledge'>
			<Text>
				I&apos;m holding a strong understanging of the fundamentals of web development, including{' '}
				<strong className='font-medium'>HTML , CSS, and JavaScript</strong> .
			</Text>
			<Text>
				More then that, I&apos;m also well-versed in frontend frameworks like{' '}
				<strong className='font-medium'>React/NextJS</strong>, <strong className='font-medium'>TypeScript</strong>,{' '}
				<strong className='font-medium'>TailwindCSS</strong>, No-code tools like{' '}
				<strong className='font-medium'>Webflow and WebStudio</strong>, and a dip understanding of{' '}
				<strong className='font-medium'>technical SEO, UI, and UX.</strong>
			</Text>

			<div className='relative rounded-3xl border border-background/50 p-4'>
				<EvervaultCard text={data[currentIndex]} trigger={trigger} />
			</div>
		</CVLayout>
	);
}
