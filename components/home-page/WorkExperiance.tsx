import Image from 'next/image';
import CVLayout from '@/components/home-page/CVLayout';
import { Title } from '@/components/ui/title';
import { Text } from '@/components/ui/text';
import { data } from '@/lib/clients-data';
import FlickeringGrid from '@/components/ui/flickering-grid';
import styles from '@/styles/content-layout.module.css';
import { ContentLoop } from '@/components/ui/content-loop';

export default function WorkExperiance() {
	return (
		<CVLayout title='Work Experiance'>
			<Title className={styles.title3} level={3}>
				Independent developer | 2019 - PRESENT
			</Title>
			<Text>
				For the past few years, I have been building and maintaining clients websites, working closely with marketing
				teams and designers.
			</Text>
			<Text>
				The projects I have worked on are a mix of static websites and dynamic web applications built with no-code
				tools, and <strong className={styles.strong}>NextJS</strong>.
			</Text>
			<Text>Clients I&apos;m proudly working with:</Text>
			<div className='relative flex aspect-video items-center justify-center p-5'>
				<ContentLoop className='z-20 flex h-full w-full flex-1 grow flex-col items-center justify-center [&>div]:w-2/3 lg:[&>div]:w-1/2'>
					{data.map((item) => (
						<a key={item.name} href={item.fullUrl} target='_blank' rel='noopener noreferrer'>
							<figure>
								<Image src={item.logo} alt={item.name} className='w-full' />
							</figure>
						</a>
					))}
				</ContentLoop>
				<ContentLoop className='absolute inset-0 bottom-3 left-3 top-auto z-20'>
					{data.map((item) => (
						<a key={item.name} href={item.fullUrl} target='_blank' rel='noopener noreferrer'>
							<div>{item.showName}</div>
						</a>
					))}
				</ContentLoop>

				<FlickeringGrid
					className='absolute inset-0 z-10 opacity-70 [mask-image:radial-gradient(220px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(240px_circle_at_center,white,transparent)]'
					squareSize={4}
					gridGap={6}
					color='rgb(236, 72, 153)'
					maxOpacity={0.7}
					flickerChance={0.1}
					height={800}
					width={800}
				/>
			</div>
		</CVLayout>
	);
}
